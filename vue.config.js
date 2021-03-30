module.exports = {
  // 打包项目的时候必须要配置的东西
  publicPath:process.env.NODE_ENV == "production"?"./":"/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/variables.scss";`
      }
    }
  }
}