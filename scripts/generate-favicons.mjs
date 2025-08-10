import favicons from "favicons";
import fs from "fs";
import path from "path";

const src = path.resolve("public/assets/og-image.png");
const outDir = path.resolve("public/assets");

const config = {
  path: "/assets/",
  appName: "Karan's Portfolio",
  appShortName: "Karan",
  appDescription: "Portfolio of Karan Mandalam — AI, product, automation.",
  theme_color: "#0f172a",
  background: "#0f172a",
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: false,
    coast: false,
    favicons: true,
    windows: false,
    yandex: false
  },
};

(async () => {
  try {
    const response = await favicons(src, config);

    // Write image assets
    for (const image of response.images) {
      fs.writeFileSync(path.join(outDir, image.name), image.contents);
    }

    // Write other files (e.g., manifest)
    for (const file of response.files) {
      fs.writeFileSync(path.join(outDir, file.name), file.contents);
    }

    console.log("Generated:", [
      ...response.images.map((i) => i.name),
      ...response.files.map((f) => f.name),
    ].join(", "));
  } catch (err) {
    console.error("Favicons generation failed:\n", err);
    process.exit(1);
  }
})();

