module.exports = {
  devServer: {
    proxy: "http://localhost:3008"
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
           @import  "@/assets/_variables.scss";
        `
      }
    }
  }
};
