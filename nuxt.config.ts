// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineNuxtConfig({
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/google-fonts",
    "@nuxtjs/color-mode",
    "shadcn-nuxt",
    "@pinia/nuxt",
    "@nuxt/eslint",
    "@nuxt/image",
  ],
  devtools: { enabled: true },
  css: ["./tailwind.css"],
  colorMode: {
    classPrefix: "",
    classSuffix: "",
    preference: "system",
  },
  compatibilityDate: "2025-07-15",
  vite: {
    plugins: [
      tailwindcss(),
    ],
    resolve: {
      alias: {
        "@": resolve(__dirname, "app"),
        "@server": resolve(__dirname, "server"),
      },
    },
  },
  eslint: {
    checker: true,
    config: {
      stylistic: {
        indent: 2,
        semi: true,
        quotes: "double",
      },
    },
  },
  googleFonts: {
    families: {
      Inter: "100..900",
    },
  },
  i18n: {
    defaultLocale: "fr",
    locales: [
      {
        code: "fr",
        iso: "fr-FR",
        name: "Français",
        file: "fr.json",
      },
    ],
  },
  pinia: {
    storesDirs: ["./app/stores/**"],
  },
  shadcn: {
    prefix: "",
    componentDir: "./app/components/ui",
  },
});
