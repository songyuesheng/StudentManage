const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    proxy: {
        '/api': {
            target: 'http://10.4.42.51:8080',
            websocket: false,
            changeOrigin:false,
            pathRewrite: {
                '^/api': ''
            }
        }
    }
}
})
