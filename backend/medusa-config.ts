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
    databaseDriverOptions: { ssl: false, sslmode: "disable" },
    workerMode: process.env.MEDUSA_WORKER_MODE as
      | "shared"
      | "worker"
      | "server",
  },
  admin: {
    disable: process.env.DISABLE_MEDUSA_ADMIN === "true",
    vite: (config) => {
      if (process.env.NODE_ENV === "production") return config
      return {
        server: {
          host: "0.0.0.0",
          allowedHosts: [
            "localhost",
            ".localhost",
            "127.0.0.1",
            "pitayanewyork.com",
          ],
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
  //   {
  //     resolve: "@medusajs/medusa/caching",
  //     options: {
  //       providers: [
  //         {
  //           resolve: "@medusajs/caching-redis",
  //           id: "caching-redis",
  //           is_default: true,
  //           options: {
  //             redisUrl: process.env.CACHE_REDIS_URL,
  //           },
  //         },
  //       ],
  //     },
  //   },
  //   {
  //     resolve: "@medusajs/medusa/event-bus-redis",
  //     options: {
  //       redisUrl: process.env.REDIS_URL,
  //     },
  //   },
  //   {
  //     resolve: "@medusajs/medusa/workflow-engine-redis",
  //     options: {
  //       redis: {
  //         // Note: This was `url` before v2.12.2
  //         // It's now deprecated in favor of `redisUrl`
  //         redisUrl: process.env.REDIS_URL,
  //       },
  //     },
  //   },
  //   {
  //     resolve: "@medusajs/medusa/locking",
  //     options: {
  //       providers: [
  //         {
  //           resolve: "@medusajs/medusa/locking-redis",
  //           id: "locking-redis",
  //           is_default: true,
  //           options: {
  //             redisUrl: process.env.LOCKING_REDIS_URL,
  //           },
  //         },
  //       ],
  //     },
  //   },
  // ],
})
