module.exports = {
  publicPath: "",
  productionSourceMap: false,
  devServer: {
    port: 8192,
    overlay: {
      warnings: false,
      errors: true,
    },
    open: true,
    // proxy: {
    //     '/api': {
    //         target: '',
    //         ws: true,
    //         changOrigin: true,
    //         pathRewrite: {
    //             '^/api': ''
    //         }
    //     }
    // },
    disableHostCheck: true,
  },
};
