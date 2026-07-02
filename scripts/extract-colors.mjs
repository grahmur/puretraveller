import sharp from "sharp";
import { join } from "path";

const OUTPUT = "public\\images";

async function extract() {
  const file = "logo-light.webp";
  
  const pixels = await sharp(join(OUTPUT, file))
    .ensureAlpha()
    .raw()
    .toBuffer();

  const colorCount = new Map();
  const allColors = [];

  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];
    const a = pixels[i + 3];
    if (a < 50) continue;
    const hex = `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
    colorCount.set(hex, (colorCount.get(hex) || 0) + 1);
    allColors.push({ r, g, b });
  }

  const sorted = [...colorCount.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 15);

  console.log("Top 15 colors in logo-light:");
  for (const [color, count] of sorted) {
    console.log(`  ${color} — ${count} pixels`);
  }
  console.log("\nTotal non-transparent pixels:", allColors.length);
}

extract().catch(console.error);
