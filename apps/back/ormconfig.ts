module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: '3306',
  username: 'db',
  password: 'db',
  database: 'db',
  entities: ['dist/**/*.entity{.ts,.js}'],
  logging: true,
  synchronize: false,
  // migrations: [`dist/**/db/migrations/*{.ts,.js}`],
  // migrationsRun: true,
  // cli: {
  //   migrationsDir: `src/db/migrations`,
  // },
  // cache: {
  //   type: 'ioredis',
  //   duration: 120000,
  //   options: {
  //     host: process.env.REDIS_HOST,
  //     port: process.env.REDIS_PORT,
  //   },
  // },
};
