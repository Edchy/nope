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
    {
      name: "D-DIN",
      cssVariable: "--font-ddin",
      provider: fontProviders.local(),
      fallbacks: ["system-ui", "sans-serif"],
      options: {
        variants: [
          {
            style: "normal",
            weight: "400",
            src: ["./src/assets/fonts/D-DIN.otf"],
            display: "swap",
          },
        ],
      },
    },
    {
      name: "Metropolis",
      cssVariable: "--font-metropolis",
      provider: fontProviders.local(),
      fallbacks: ["system-ui", "sans-serif"],
      options: {
        variants: [
          {
            style: "normal",
            weight: "400",
            src: ["./src/assets/fonts/Metropolis-Regular.woff2"],
            display: "swap",
          },
        ],
      },
    },
  ],
});
