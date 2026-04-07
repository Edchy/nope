import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  fonts: [
    {
      name: "Jost",
      cssVariable: "--font-jost",
      provider: fontProviders.local(),
      fallbacks: ["system-ui", "sans-serif"],
      options: {
        variants: [
          {
            style: "normal",
            weight: "100 900",
            src: ["./src/assets/fonts/Jost-VariableFont_wght.ttf"],
            display: "swap",
          },
        ],
      },
    },
  ],
});
