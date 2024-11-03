import { Plugin } from "@docusaurus/types";

export default function postCssPlugin(): Plugin {
  return {
    name: "postCss-plugin",
    configurePostCss(postcssOptions) {
      // Append new PostCSS plugins here.
      postcssOptions.plugins = [
        require("postcss-preset-env"), // allow newest CSS syntax
      ];
      return postcssOptions;
    },
  };
}
