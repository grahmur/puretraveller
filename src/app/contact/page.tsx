"use client";

import { useState, useCallback } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  CONTACT_PHONE,
  CONTACT_EMAIL,
  CONTACT_ADDRESS,
  SOCIAL_LINKS,
} from "@/lib/constants";
import { tours } from "@/lib/data/tours";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[\d\s\-\+\(\)]{7,20}$/;

interface FieldErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

function validateForm(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): FieldErrors | null {
  const errors: FieldErrors = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }
  if (!data.email || !EMAIL_REGEX.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.phone || !PHONE_REGEX.test(data.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!data.message || data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return Object.keys(errors).length > 0 ? errors : null;
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredTour: "",
    message: "",
  });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof FieldErrors];
        return next;
      });
    },
    []
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validateForm(formData);
    if (errors) {
      setFieldErrors(errors);
      return;
    }

    setSending(true);
    setError(false);
    setServerError("");

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      preferredTour: formData.preferredTour,
      message: formData.message.trim(),
    };

    try {
      const apiRes = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (apiRes.ok) {
        setSubmitted(true);
        setError(false);
        setSending(false);
        return;
      }

      const result = await apiRes.json();
      if (apiRes.status === 502) {
        const directRes = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
            subject: `New Enquiry from ${payload.name} — Pure Traveller`,
            from_name: payload.name,
            ...payload,
            preferredTour: payload.preferredTour || "Not specified",
          }),
        });

        if (directRes.ok) {
          setSubmitted(true);
          setError(false);
        } else {
          setError(true);
          setServerError("Failed to send message. Please email us directly.");
        }
      } else {
        setError(true);
        setServerError(result.error || "Something went wrong.");
      }
    } catch {
      setError(true);
      setServerError("Network error. Please check your connection.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-navy via-brand to-brand/80 pt-36 pb-16 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Get in Touch
        </h1>
        <p className="mt-4 text-white/80 max-w-xl mx-auto text-lg">
          Have a question or ready to book your adventure? We are here to help.
        </p>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Form */}
          <div className="md:col-span-2 bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">
              Send us a Message
            </h2>
            {error && (
              <div className="mb-6 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                {serverError || `Something went wrong. Please try again or email us directly at ${CONTACT_EMAIL}.`}
              </div>
            )}
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-brand">
                  Thank You!
                </h3>
                <p className="mt-2 text-stone-600">
                  We will get back to you within 24 hours.
                </p>
                <div className="mt-6">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSubmitted(false);
                      setError(false);
                      setServerError("");
                      setFieldErrors({});
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        preferredTour: "",
                        message: "",
                      });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={`w-full rounded-lg border px-4 py-3 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-colors ${fieldErrors.name ? "border-red-400" : "border-stone-200"}`}
                  />
                  {fieldErrors.name && (
                    <p className="mt-1 text-xs text-red-600">{fieldErrors.name}</p>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`w-full rounded-lg border px-4 py-3 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-colors ${fieldErrors.email ? "border-red-400" : "border-stone-200"}`}
                    />
                    {fieldErrors.email && (
                      <p className="mt-1 text-xs text-red-600">{fieldErrors.email}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXXXXXXX"
                      className={`w-full rounded-lg border px-4 py-3 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-colors ${fieldErrors.phone ? "border-red-400" : "border-stone-200"}`}
                    />
                    {fieldErrors.phone && (
                      <p className="mt-1 text-xs text-red-600">{fieldErrors.phone}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    Preferred Tour
                  </label>
                  <select
                    name="preferredTour"
                    value={formData.preferredTour}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-stone-200 px-4 py-3 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-colors bg-white"
                  >
                    <option value="">Select a tour...</option>
                    {tours.map((tour) => (
                      <option key={tour.id} value={tour.name}>
                        {tour.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your travel plans..."
                    className={`w-full rounded-lg border px-4 py-3 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-colors resize-y ${fieldErrors.message ? "border-red-400" : "border-stone-200"}`}
                  />
                  {fieldErrors.message && (
                    <p className="mt-1 text-xs text-red-600">{fieldErrors.message}</p>
                  )}
                </div>
                <Button type="submit" variant="primary" size="lg" className="w-full" disabled={sending}>
                  {sending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8 pt-8 md:pt-0">
            <div>
              <div className="text-2xl mb-2">📞</div>
              <h3 className="font-semibold text-stone-900">Phone</h3>
              <p className="text-stone-600 mt-1">{CONTACT_PHONE}</p>
            </div>
            <div>
              <div className="text-2xl mb-2">📧</div>
              <h3 className="font-semibold text-stone-900">Email</h3>
              <p className="text-stone-600 mt-1">{CONTACT_EMAIL}</p>
            </div>
            <div>
              <div className="text-2xl mb-2">📍</div>
              <h3 className="font-semibold text-stone-900">Address</h3>
              <p className="text-stone-600 mt-1">{CONTACT_ADDRESS}</p>
            </div>

            <div>
              <h3 className="font-semibold text-stone-900 mb-3">Follow Us</h3>
              <div className="flex gap-3">
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-600 hover:text-brand/80 transition-colors"
                >
                  Instagram
                </a>
                <span className="text-stone-300">|</span>
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-600 hover:text-brand/80 transition-colors"
                >
                  Facebook
                </a>
                <span className="text-stone-300">|</span>
                <a
                  href={SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-600 hover:text-brand/80 transition-colors"
                >
                  YouTube
                </a>
              </div>
            </div>

            <div className="bg-brand/10 rounded-lg p-5 border border-brand/20">
              <h3 className="font-semibold text-stone-900 mb-2">
                Operating Hours
              </h3>
              <p className="text-stone-600 text-sm">
                We are available 7 days a week
              </p>
              <p className="text-stone-600 text-sm font-medium mt-1">
                9 AM — 8 PM IST
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
