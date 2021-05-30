module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 2020),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "6b34cb7bd7c23dcf6fb64b7771d99696"),
    },
  },
});
