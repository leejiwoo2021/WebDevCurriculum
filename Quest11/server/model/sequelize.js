/* eslint-disable quotes */
const { Sequelize, Op, Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

const sequelize = new Sequelize(
  'textEditor',
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);

const User = sequelize.define('User', {
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
});

const File = sequelize.define('File', {
  user_id: {
    type: DataTypes.INTEGER,

    references: {
      model: User,
      key: 'id',
    },
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
});

async function init() {
  await setModel();
  await setUserList();
  await setFileList();

  async function setModel() {
    await sequelize.sync({ force: true });
    console.log('\n*** 테이블 Model 생성 성공. ***\n');
  }

  async function setUserList() {
    const saltRounds = 10;
    const password = 'qwer1234';
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    await User.create({ name: 'test1', password: hash });
    await User.create({ name: 'test2', password: hash });
    await User.create({ name: 'test3', password: hash });
    console.log('\n*** USER 목록 생성 성공. ***\n');
  }

  async function setFileList() {
    await File.create({
      user_id: 1,
      name: '테스트 파일 1',
      content: '첫번째 계정의 테스트 파일입니다',
    });
    await File.create({
      user_id: 1,
      name: '테스트 파일 2',
      content: '첫번째 계정의 두번째 테스트 파일입니다',
    });
    await File.create({
      user_id: 2,
      name: '테스트 파일 1',
      content: '두번째 계정의 테스트 파일입니다',
    });

    console.log('\n*** File 목록 생성 성공. ***\n');
  }
}

async function auth(id, password) {
  const user = await User.findOne({ where: { name: id } });

  if (user) {
    return bcrypt.compareSync(password, user.password);
  } else {
    return false;
  }
}

async function getFileList(userName) {
  const user = await User.findOne({ where: { name: userName } });
  const files = await File.findAll({
    where: { user_id: user.id },
    order: sequelize.literal('updatedAt DESC'),
  });

  const info = {
    fileList: [],
    lastFile: files.length > 0 ? files[0].name : '',
  };

  if (files) {
    files.forEach((file) => {
      info.fileList.push(file.name);
    });
  }

  return info;
}

async function getFile(userName, fileName) {
  const user = await User.findOne({ where: { name: userName } });
  const file = await File.findOne({
    where: {
      user_id: user.id,
      name: fileName,
    },
  });

  return file.content;
}

async function createFile(userName, fileName, content) {
  const user = await User.findOne({ where: { name: userName } });
  await File.create({
    user_id: user.id,
    name: fileName,
    content,
  });
}

async function updateFile(userName, fileName, content) {
  const user = await User.findOne({ where: { name: userName } });
  await File.update(
    { content },
    {
      where: {
        user_id: user.id,
        name: fileName,
      },
    }
  );
}

exports.init = init;
exports.auth = auth;
exports.getFileList = getFileList;
exports.getFile = getFile;
exports.createFile = createFile;
exports.updateFile = updateFile;
