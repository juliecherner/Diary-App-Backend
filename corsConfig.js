const corsConfig = {
  origin: [
    "http://localhost:3000",
    "https://julie-cherner-diary-project.netlify.app",
  ],
  methods: ["GET", "PATCH", "POST", "DELETE", "OPTIONS"],
};

module.exports = corsConfig;
