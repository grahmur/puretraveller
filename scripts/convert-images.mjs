import sharp from "sharp";
import { existsSync } from "fs";
import { join } from "path";

const DOWNLOADS = "C:\\Users\\Mukul\\Downloads";
const OUTPUT = "public\\images\\tours";

const conversions = {
  [join(DOWNLOADS, "sean-robertson-ag5OsQmyD8A-unsplash.jpg")]: "amritsar-dharamshala-heritage.webp",
};

async function convert() {
  for (const [srcPath, destName] of Object.entries(conversions)) {
    const destPath = join(OUTPUT, destName);
    if (!existsSync(srcPath)) {
      console.log("SKIP (not found): " + srcPath);
      continue;
    }
    await sharp(srcPath).webp({ quality: 95 }).toFile(destPath);
    console.log("OK: " + destName + " (overwritten)");
  }
  console.log("Done.");
}

convert().catch(console.error);
