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
  const User = sequelize.define(
    'User',
    {
      // Model attributes are defined here
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
    },
    {
      // Other model options go here
    }
  );

  // the defined model is the class itself
  console.log(User === sequelize.models.User); // true

  await User.sync({ force: true });
  console.log('The table for the User model was just (re)created!');
}

exports.run = run;
