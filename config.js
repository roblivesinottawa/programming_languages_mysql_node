const env = process.env;

const config = {
  db: {
    host: env.DB_Host || "localhost",
    user: env.DB_USER || "root",
    password: env.DB_PASSWORD || "Robisageek2021",
    database: env.DB_NAME || "programming_languages",
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;
