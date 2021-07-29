export default {
  components: true,
  head: {
    titleTemplate: "Mastering Nuxt: %s",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      {
        charset: "utf-8"
      }
    ]
  },
  router: {
    prefetchLinks: false
  },
  plugins: [
    "~/plugins/maps.client",
    "~/plugins/dataApi",
    "~/plugins/auth.client",
    "~/plugins/vCalendar.client",
    "~/plugins/stripe.client"
  ],
  modules: [
    "~/modules/auth",
    "~/modules/algolia",
    "~/modules/cloudinary",
    "@nuxtjs/cloudinary",
    "~/modules/stripe"
  ],
  buildModules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  cloudinary: {
    cloudName: "daniloraisi"
  },
  image: {
    cloudinary: {
      baseURL: process.env.CLOUDINARY_BASE_URL
    }
  },
  css: ["~/assets/sass/app.scss"],
  build: {
    extractCSS: true,
    loaders: {
      limit: 0
    }
  },
  publicRuntimeConfig: {
    rootUrl: process.env.BASE_URL,
    auth: {
      cookieName: "idToken",
      clientId: process.env.GOOGLE_AUTH_CLIENT_ID
    },
    algolia: {
      appId: process.env.ALGOLIA_APP_ID,
      key: process.env.ALGOLIA_KEY
    },
    cloudinary: {
      apiKey: process.env.CLOUDINARY_API_KEY
    },
    stripe: {
      key: process.env.STRIPE_KEY
    }
  },
  privateRuntimeConfig: {
    algolia: {
      appId: process.env.ALGOLIA_APP_ID,
      key: process.env.ALGOLIA_PRIVATE_KEY
    },
    cloudinary: {
      apiSecret: process.env.CLOUDINARY_API_SECRET
    },
    stripe: {
      secretKey: process.env.STRIPE_SECRET_KEY
    }
  }
};
