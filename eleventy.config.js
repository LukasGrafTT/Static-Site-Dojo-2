import { HtmlBasePlugin } from "@11ty/eleventy";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default async function(eleventyConfig) {

  eleventyConfig.addPlugin(HtmlBasePlugin);

  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
};

export const config = {
  dir: {
    input: "src",
    output: "_site",
    includes: "../_includes",
    data: "../_data"
  }
};
