module.exports = {
  database: 'test',
  username: 'root',
  password: '1234',
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  define: {
    freezeTableName: true,
    timestamps: true,
    paranoid: false,
  }
}
