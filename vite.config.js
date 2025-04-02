import { defineConfig } from "vite";
import { resolve } from "path";
import _ from "lodash";

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
        romannumeralconverter: resolve(__dirname, "romannumeralconverter/index.html"),
        telephonevalidator: resolve(__dirname, "telephonevalidator/index.html"),
        cashregisterproject: resolve(__dirname, "cashregisterproject/index.html"), 
        pokemonsearchapp: resolve(__dirname, "pokemonsearchapp/index.html"), 
        recipeorganizerandmealplanner: resolve (__dirname, "recipeorganizerandmealplanner/index.html")

      },
    },
  },
});