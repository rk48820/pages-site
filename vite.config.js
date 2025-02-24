import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/pages-site/",  
  build: {
    outDir: "docs", 
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about/index.html"),
        timer: resolve(__dirname, "timer/index.html"),
        fcccolorchanger: resolve(__dirname, "fcccolorchanger/index.html"),
        palindromechecker: resolve(__dirname, "palindromechecker/index.html"),
        romannumeralconverter: resolve(__dirname, "romannumeralconverter/index.html")

      },
    },
  },
});