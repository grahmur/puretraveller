import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

const ALLOWED_ORIGINS: (string | RegExp)[] = [
  "https://puretraveller.in",
  /^https?:\/\/localhost(:\d+)?$/,
  /\.vercel\.app$/,
];

interface RequestBody {
  name: string;
  email: string;
  phone: string;
  message: string;
  preferredTour?: string;
  subject?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[\d\s\-\+\(\)]{7,20}$/;

const ipAttempts = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 15 * 60 * 1000;

function getRateLimitInfo(ip: string): { allowed: boolean } {
  const now = Date.now();
  const entry = ipAttempts.get(ip);

  if (!entry || now > entry.resetAt) {
    ipAttempts.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return { allowed: true };
  }

  if (entry.count >= RATE_LIMIT) {
    return { allowed: false };
  }

  entry.count++;
  return { allowed: true };
}

function validateBody(body: unknown): { data: RequestBody } | { error: string } {
  if (!body || typeof body !== "object") {
    return { error: "Invalid request body." };
  }

  const { name, email, phone, message, preferredTour, subject } = body as Record<string, unknown>;

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return { error: "Name must be at least 2 characters." };
  }

  if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
    return { error: "A valid email address is required." };
  }

  if (!phone || typeof phone !== "string" || !PHONE_REGEX.test(phone.trim())) {
    return { error: "A valid phone number is required." };
  }

  if (!message || typeof message !== "string" || message.trim().length < 10) {
    return { error: "Message must be at least 10 characters." };
  }

  if (preferredTour !== undefined && typeof preferredTour !== "string") {
    return { error: "Invalid preferred tour." };
  }

  return {
    data: {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      message: message.trim(),
      preferredTour: preferredTour?.trim(),
      subject: typeof subject === "string" ? subject.trim() : undefined,
    },
  };
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin") || "";

  if (
    origin &&
    !ALLOWED_ORIGINS.some((allowed) =>
      typeof allowed === "string"
        ? origin.startsWith(allowed)
        : allowed.test(origin)
    )
  ) {
    return NextResponse.json(
      { error: "Origin not allowed." },
      { status: 403 }
    );
  }

  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim() || "unknown";

  const { allowed } = getRateLimitInfo(ip);
  if (!allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const validation = validateBody(body);
  if ("error" in validation) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  const { data } = validation;

  try {
    const response = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_KEY,
        subject: data.subject || `New Enquiry from ${data.name} — Pure Traveller`,
        from_name: data.name,
        name: data.name,
        email: data.email,
        phone: data.phone,
        preferredTour: data.preferredTour || "Not specified",
        message: data.message,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to submit form. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to reach email service. Please try again later." },
      { status: 502 }
    );
  }
}
