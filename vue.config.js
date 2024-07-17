const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    headers: {
      'Cache-Control': 'no-store'
    }
  }
}
