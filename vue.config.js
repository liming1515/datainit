module.exports = {
  // build输出目录
  outputDir: 'dist',
  // 静态资源目录（js, css, img）
  assetsDir: 'assets',
  // 是否开启eslint
  lintOnSave: false,
  devServer: {
    // 是否自动弹出浏览器页面
    open: false,
    // host: 'localhost',
    host: '0.0.0.0',
    port: '8080',
    // 是否使用https协议
    https: false,
    // 是否开启热更新
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://localhost/', //  API服务器的地址
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
// module.exports = {
//   // build输出目录
//   outputDir: 'dist',
//   // 静态资源目录（js, css, img）
//   assetsDir: 'assets',
//   // 是否开启eslint
//   lintOnSave: false,
//   devServer: {
//     // 是否自动弹出浏览器页面
//     open: false,
//     // host: 'localhost',
//     host: '0.0.0.0',
//     port: '8080',
//     // 是否使用https协议
//     https: false,
//     // 是否开启热更新
//     hotOnly: false,
//     proxy: {
//       '/api': {
//         target: 'http://localhost/', //  API服务器的地址
//         changeOrigin: true,
//         pathRewrite: {
//           '^/api': ''
//         }
//       }
//     }
//   }
// }
