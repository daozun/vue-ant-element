const path = require("path");

function resolve(dir) {
  console.log("dir", dir);
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath:
    process.env.NODE_ENV === "development" ? "/" : "/vue-ant-element/",
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: process.env.NODE_ENV === "development",
  productionSourceMap: false,
  devServer: {
    port: 9578,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: "vue ant admin",
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
  },
};
