/* eslint-disable @typescript-eslint/no-empty-interface */
import { Sequelize, DataTypes, Model } from 'sequelize';
import bcrypt from 'bcrypt';

const sequelize = new Sequelize('textEditor', process.env.DB_USER as string, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

interface UserInstance extends Model {
  id: number;
  name: string;
  password: string;
}

const User = sequelize.define<UserInstance>('User', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
  },
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

interface FileInstance extends Model {
  id: number;
  user_id: number;
  name: string;
  content: string;
}

const File = sequelize.define<FileInstance>('File', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER.UNSIGNED,
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

export async function init(): Promise<void> {
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

export async function auth(id: string, password: string): Promise<boolean> {
  const user = await User.findOne({ where: { name: id } });

  if (user) {
    return bcrypt.compareSync(password, user.password);
  } else {
    return false;
  }
}

interface infoTypes {
  fileList: string[];
  lastFile: string;
}

export async function getFileList(userName: string): Promise<infoTypes> {
  const user = await User.findOne({ where: { name: userName } });
  const files = await File.findAll({
    where: { user_id: user?.id },
    order: Sequelize.literal('updatedAt DESC'),
    // 대소문자?
  });

  const info: infoTypes = {
    fileList: [],
    lastFile: files.length > 0 ? files[0].name : '',
  };

  if (files) {
    files.forEach((file: any) => {
      info.fileList.push(file.name);
    });
  }

  return info;
}

export async function getFile(userName: string, fileName: string): Promise<string> {
  const user = await User.findOne({ where: { name: userName } });
  const file = await File.findOne({
    where: {
      user_id: user?.id,
      name: fileName,
    },
  });

  await sequelize.query(`UPDATE Files SET updatedAt = NOW() WHERE id = ${file?.id}`);

  if (file) return file.content;
  else return '';
}

export async function createFile(userName: string, fileName: string, content: string): Promise<void> {
  const user = await User.findOne({ where: { name: userName } });
  if (user?.id)
    await File.create({
      user_id: user.id,
      name: fileName,
      content,
    });
}

export async function updateFile(userName: string, fileName: string, content: string): Promise<void> {
  const user = await User.findOne({ where: { name: userName } });
  await File.update(
    { content },
    {
      where: {
        user_id: user?.id,
        name: fileName,
      },
    }
  );
}

// exports.init = init;
// exports.auth = auth;
// exports.getFileList = getFileList;
// exports.getFile = getFile;
// exports.createFile = createFile;
// exports.updateFile = updateFile;
