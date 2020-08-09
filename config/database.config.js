module.exports = {
  database: 'travel',
  username: 'root',
  password: '',
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
