const pluginRss = require("@11ty/eleventy-plugin-rss");

function toUTCDate(value) {
  if (!(value instanceof Date)) {
    return value;
  }
  return [
    value.getFullYear(),
    value.getMonth().toString().padStart(2, "0"),
    value.getDate().toString().padStart(2, "0")
  ].join("-");
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.setTemplateFormats([
    "asc",
    "css",
    "html",
    "ico",
    "md",
    "njk",
    "png",
    "svg",
  ]);

  eleventyConfig.addNunjucksFilter("toUTCDate", toUTCDate);
};
