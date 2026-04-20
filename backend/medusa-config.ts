import { loadEnv, defineConfig } from "@medusajs/framework/utils"

loadEnv(process.env.NODE_ENV || "development", process.cwd())

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    redisUrl: process.env.REDIS_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET!,
      cookieSecret: process.env.COOKIE_SECRET!,
    },
    databaseDriverOptions: { ssl: false },
  },
  admin: {
    vite: (config) => {
      if (process.env.NODE_ENV === "production") return config
      return {
        server: {
          host: "0.0.0.0",
          allowedHosts: ["localhost", ".localhost", "127.0.0.1", "pitayanewyork.com"],
          hmr: {
            port: 5173,
            clientPort: 5173,
          },
        },
      }
    },
  },
  // modules: [
  //   {
  //     resolve: "@medusajs/medusa/payment",
  //     options: {
  //       providers: [
  //         {
  //           resolve: "@medusajs/medusa/payment-stripe",
  //           id: "stripe",
  //           options: {
  //             apiKey: process.env.STRIPE_API_KEY,
  //           },
  //         },
  //       ],
  //     },
  //   },
  // ],
})
