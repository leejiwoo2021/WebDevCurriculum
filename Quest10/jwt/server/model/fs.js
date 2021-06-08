const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

function getFileList(user) {
  let fileList, lastFile;

  try {
    const index = fs.readFileSync(`storage/${user}/index.json`);
    const json = JSON.parse(index.toString());
    fileList = Object.getOwnPropertyNames(JSON.parse(index.toString()).files);
    lastFile = json.lastFile;
  } catch (err) {
    throw new Error('파일 리스트를 읽는중 에러가 발생했습니다');
  }

  return { fileList, lastFile };
}

function getFile(user, name) {
  let data;

  try {
    const index = fs.readFileSync(`storage/${user}/index.json`);
    const json = JSON.parse(index.toString());

    json.lastFile = name;
    const jsonBuffer = new Uint8Array(Buffer.from(JSON.stringify(json)));

    fs.writeFileSync(`storage/${user}/index.json`, jsonBuffer);

    data = fs.readFileSync(
      `storage/${user}/${JSON.parse(index.toString()).files[name]}`,
      {
        encoding: 'utf-8',
      }
    );
  } catch (err) {
    throw new Error('해당 파일이 존재하지 않습니다');
  }
  return data;
}

function createFile(user, name, content) {
  try {
    const index = fs.readFileSync(`storage/${user}/index.json`);
    const json = JSON.parse(index.toString());

    if (!json.files[name]) {
      const uuid = uuidv4();
      const data = new Uint8Array(Buffer.from(content));
      json.files[name] = uuid;

      fs.writeFileSync(`storage/${user}/${uuid}`, data);
      fs.writeFileSync(`storage/${user}/index.json`, JSON.stringify(json));
    } else throw new Error();
  } catch (err) {
    throw new Error('이미 존재하는 파일입니다');
  }
}

function saveFile(user, name, content) {
  try {
    const index = fs.readFileSync(`storage/${user}/index.json`);
    const json = JSON.parse(index.toString());

    if (json.files[name]) {
      const data = new Uint8Array(Buffer.from(content));

      fs.writeFileSync(`storage/${user}/${json.files[name]}`, data);
    } else throw new Error();
  } catch (err) {
    throw new Error('파일 저장중 오류가 발생했습니다');
  }
}

function editFile(user, name, content) {
  try {
    const index = fs.readFileSync(`storage/${user}/index.json`);
    const json = JSON.parse(index.toString());
    if (!json.files[name]) throw new Error();
  } catch (err) {
    throw new Error('파일이 존재하지 않거나, 권한이 없습니다.');
  }

  saveFile(user, name, content);
}

function deleteFile(user, name) {
  try {
    const index = fs.readFileSync(`storage/${user}/index.json`);
    const json = JSON.parse(index.toString());

    if (!json[name]) throw new Error();
    else {
      fs.rmSync(`storage/${user}/${json[name]}`);
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
