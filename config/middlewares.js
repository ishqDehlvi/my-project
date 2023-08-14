module.exports = [
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      origin: ["*"],
    },
  },
  {
    name: "strapi::cors",
    config: {
      contentSecurityPolicy: {
        directives: {
          "default-src": ["'self'"],
          "script-src": [
            "'self'",
            "'unsafe-inline'", // Use this cautiously for now, consider refining later
            "https:",
            "http:",
            "http://localhost:1337",
            "https://f8c1-119-42-58-65.ngrok-free.app/",
            "https://www.fountaininstitute.in/",
          ],
          "style-src": ["'self'", "'unsafe-inline'", "https:"],
          "img-src": ["'self'", "data:", "https:"],
          "font-src": ["'self'", "https:"],
          "connect-src": ["'self'", "http://localhost:3000"],
          "frame-src": ["'self'", "https:"],
          "object-src": ["'none'"],
          "media-src": ["'self'", "https:"],
        },
      },
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
