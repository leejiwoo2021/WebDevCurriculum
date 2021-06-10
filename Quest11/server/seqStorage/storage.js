const { Sequelize, Op, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  'textEditor',
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);

async function run() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

exports.run = run;
