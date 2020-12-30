export default {
  mode: 'universal',
  server: {
    port: 4000 // default: 3000
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'zealsay说你想说-为分享快乐而生',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0'
      },
      {
        name: 'X-UA-Compatible',
        content: 'ie=edge,chrome=1'
      },
      {
        name: 'Cache-Control',
        content: 'no-siteapp'
      },
      {
        name: 'Cache-Control',
        content: 'no-transform'
      },
      {
        name: 'applicable-device',
        content: 'pc,mobile'
      },
      {
        name: 'MobileOptimized',
        content: 'width'
      },
      {
        name: 'HandheldFriendly',
        content: 'true'
      },
      {
        name: 'renderer',
        content: 'webkit'
      },
      {
        name: 'force-rendering',
        content: 'webkit'
      },
      {
        name: 'google',
        content: 'notranslate'
      },
      {
        name: '360-site-verification',
        content: '604a14b53c6b871206001285921e81d8'
      },
      {
        name: 'google-site-verification',
        content: 'cV4-qkUJZR6gmFeajx_UyPe47GW9vY6cnCrYtCHYNh4'
      },
      {
        name: 'google-site-verification',
        content: 'HF7lfF8YEGs1qtCE-kPml8Z469e2RHhGajy6JPVy5XI'
      },
      {
        name: 'tencent-site-verification',
        content: 'da26ce22cfed7aba6a96d8409f9b53a6'
      },
      {
        name: 'apple-mobile-web-app-title',
        content: 'zealsay说你想说'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'zealsay说你想说，是一个关注于互联网、IT技术经验分享的个人独立博客。专注于IT行业最前沿的技术。致力成为互联网上最个性、最极客、具传播力的个人独立博客。'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          '技术人生,技术笔记,情感交流,技术分享,java,spring boot,vue,nuxt,vuetify,后台,前端,服务器,动漫,程序员,全栈工程师,全栈,zealsay,zealsay博客,zealsay说你想说,王者荣耀,游戏,盘点,个人博客,建站系统,生活杂记,随笔,WEB平台,BOX-ROM,BoxMod。'
      },
      {
        hid: 'author',
        name: 'author',
        content: 'zeal'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://apps.bdimg.com/libs/jquery/1.7.1/jquery.min.js'
      },
      {
        src: 'https://pan.zealsay.com/live2d/js/live2d.js'
      },
      {
        src: 'https://pic.zealsay.com/static/js/baidu.js'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: false,
  /*
   ** Global CSS
   */
  css: [
    'chartist/dist/chartist.min.css',
    '@/assets/scss/styles/index.scss',
    '@/static/live2d/css/live2d.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/plugins/axios', ssr: false },
    { src: '@/plugins/common', ssr: false },
    { src: '@/plugins/chartist', ssr: true },
    { src: '@/plugins/vue-perfect-scrollbar', ssr: false },
    { src: '@/plugins/vue-scroll-reveal', ssr: false },
    { src: '@/plugins/vue-type', ssr: false },
    { src: '@/plugins/vue-mavon-editor', srr: false },
    { src: '@/plugins/vue-cropper', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    [
      'nuxt-sweetalert2',
      {
        heightAuto: false,
        grow: true,
        // confirmButtonClass:
        //   'v-btn btn-alert v-btn--depressed v-btn--flat v-btn--outlined v-btn--round theme--light v-size--small text-primary text--darken-1',
        confirmButtonText: '确定',
        // cancelButtonClass:
        //   'v-btn btn-alert v-btn--depressed v-btn--flat v-btn--outlined v-btn--round theme--light v-size--small darken-1--text',
        cancelButtonText: '取消'
      }
    ]
  ],
  /*
   ** auth middleware
   */
  router: {
    middleware: ['auth']
  },
  /*
   *配置auth.
   */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/v1/authentication/login',
            method: 'post',
            propertyName: 'data.token'
          },
          logout: { url: '/api/v1/authentication/logout', method: 'get' },
          user: {
            url: '/api/v1/authentication/user',
            method: 'get',
            propertyName: 'data'
          }
        },
        tokenRequired: true,
        tokenType: ''
      }
    },
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/'
    },
    watchLoggedIn: true // 默认为true
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    // baseURL: process.env.apiUrl, // 代理请求域名
    // https: true, // 开启https
    prefix: '/app/', // 给路径加个前缀
    proxy: true, // Can be also an object with default options
    credentials: true, // 表示跨域请求时候是否需要携带凭证
    retry: { retries: 3 }, // 超时重试3次
    progress: false, // 请求的时候是否加载loading页面
    debug: false // 开启调试，线上关闭
  },

  proxy: {
    '/app/': {
      // target: process.env.VUE_APP_API_URL, // 目标接口域名
      target: process.env.VUE_APP_API_URL || 'http://localhost:8090', // 目标接口域名
      changeOrigin: true, // 是否跨域
      pathRewrite: { '^/app/': '' } // 把/app 替换成 /
    }
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    optionsPath: './plugins/vuetify.js'
  },
  /*
   ** Build configuration
   */
  build: {
    productionSourceMap: false,
    productionGzip: true,
    productionGzipExtensions: ['js', 'css', 'svg'],
    // extractCSS: { allChunks: true }, // css 独立打包 link 的形式加载
    publicPath:
      process.env.NODE_ENV === 'production'
        ? 'https://pic.zealsay.com/zealsay/static/' // sample/essays 打包的默认路径为 ‘_nuxt’ 或者可以指定cdn 域名
        : '/_nuxt/',
    filenames: {
      // css 和 js  img 打包时指定文件夹
      app: ({ isDev }) => (isDev ? '[name].js' : '[name].js'),
      chunk: ({ isDev }) => (isDev ? '[name].js' : '[name].js'),
      css: ({ isDev }) => (isDev ? '[name].css' : '[name].css'),
      img: ({ isDev }) => (isDev ? '[path][name].[ext]' : '[path][name].[ext]'),
      font: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : '[path][name].[ext]',
      video: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : '[path][name].[ext]'
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
