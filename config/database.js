module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', process.env.MYSQL_HOSTNAME),
      port: env.int('DATABASE_PORT', process.env.MYSQL_PORT),
      database: env('DATABASE_NAME', process.env.MYSQL_DB_NAME),
      user: env('DATABASE_USERNAME', process.env.MYSQL_USER),
      password: env('DATABASE_PASSWORD', process.env.MYSQL_PASSWORD),
      ssl: env.bool('DATABASE_SSL', true),
    },
    pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
  },
});
