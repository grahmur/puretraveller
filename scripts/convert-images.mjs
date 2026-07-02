import sharp from "sharp";
import { existsSync } from "fs";
import { join } from "path";

const DOWNLOADS = "C:\\Users\\Mukul\\Downloads";
const OUTPUT = "public\\images";

const conversions = {
  [join(DOWNLOADS, "Light Background.png")]: "logo-light.webp",
  [join(DOWNLOADS, "Dark Background.png")]: "logo-dark.webp",
};

async function convert() {
  for (const [srcPath, destName] of Object.entries(conversions)) {
    const destPath = join(OUTPUT, destName);

    if (!existsSync(srcPath)) {
      console.log("SKIP (not found): " + srcPath);
      continue;
    }

    await sharp(srcPath).resize({ width: 400 }).webp({ quality: 90 }).toFile(destPath);
    console.log("OK: " + destName);
  }
  console.log("Done.");
}

convert().catch(console.error);
