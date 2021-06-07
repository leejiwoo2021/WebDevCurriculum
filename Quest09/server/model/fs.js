const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

function getFileList() {
  let fileList;

  try {
    const index = fs.readFileSync('storage/index.json');
    fileList = Object.getOwnPropertyNames(JSON.parse(index.toString()));
  } catch (err) {
    throw new Error('파일 리스트를 읽는중 에러가 발생했습니다');
  }

  return fileList;
}

function getFile(name) {
  let data;
  try {
    const index = fs.readFileSync('storage/index.json');
    data = fs.readFileSync(`storage/${JSON.parse(index.toString())[name]}`, {
      encoding: 'utf-8',
    });
  } catch (err) {
    throw new Error('해당 파일이 존재하지 않습니다');
  }
  return data;
}

function createFile(name, content) {
  try {
    const index = fs.readFileSync('storage/index.json');
    const json = JSON.parse(index.toString());

    if (!json[name]) {
      const uuid = uuidv4();
      const data = new Uint8Array(Buffer.from(content));

      json[name] = uuid;

      fs.writeFileSync(`storage/${uuid}`, data);
      fs.writeFileSync('storage/index.json', JSON.stringify(json));
    } else throw new Error();
  } catch (err) {
    throw new Error('이미 존재하는 파일입니다');
  }
}

function saveFile(name, content) {
  try {
    const index = fs.readFileSync('storage/index.json');
    const json = JSON.parse(index.toString());

    if (json[name]) {
      const data = new Uint8Array(Buffer.from(content));

      fs.writeFileSync(`storage/${json[name]}`, data);
    } else throw new Error();
  } catch (err) {
    throw new Error('파일 저장중 오류가 발생했습니다');
  }
}

function editFile(name, content) {
  try {
    const index = fs.readFileSync('storage/index.json');
    const json = JSON.parse(index.toString());
    if (!json[name]) throw new Error();
  } catch (err) {
    throw new Error('파일이 존재하지 않거나, 권한이 없습니다.');
  }

  saveFile(name, content);
}

function deleteFile(name) {
  try {
    const index = fs.readFileSync('storage/index.json');
    const json = JSON.parse(index.toString());

    if (!json[name]) throw new Error();
    else {
      fs.rmSync(`storage/${json[name]}`);
      delete json[name];
    }
  } catch (err) {
    throw new Error('파일이 존재하지 않거나, 권한이 없습니다.');
  }
}

exports.getFileList = getFileList;
exports.getFile = getFile;
exports.createFile = createFile;
exports.saveFile = saveFile;
exports.editFile = editFile;
exports.deleteFile = deleteFile;
