module.exports = {
  apps: [
    {
      name: "travel",
      script: "./server.js",
      env: {
        PORT: 3000,
        NODE_ENV: "production",
      }
    },
  ]
};
