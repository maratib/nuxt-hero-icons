import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    meta: [
      // <meta name="viewport" content="width=device-width, initial-scale=1">
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    script: [
      // <script src="https://myawesome-lib.js"></script>
      { src: "https://cdn.tailwindcss.com" },
    ],
  },

  buildModules: ["./index.js"],
});
