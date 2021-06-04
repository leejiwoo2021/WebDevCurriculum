const fs = require('fs');

function getFileList() {
  let fileList;

  try {
    fileList = fs.readdirSync('storage');
  } catch (err) {
    throw new Error('파일 리스트를 읽는중 에러가 발생했습니다');
  }

  return fileList;
}

function getFile(name) {
  let data;
  try {
    data = fs.readFileSync(`storage/${name}`, {
      encoding: 'utf-8',
    });
  } catch (err) {
    throw new Error('해당 파일이 존재하지 않습니다');
  }
  return data;
}

function createFile(name, content) {
  try {
    fs.accessSync(`storage/${name}`);
  } catch (err) {
    saveFile(name, content);
    return;
  }

  throw new Error('이미 존재하는 파일입니다');
}

function saveFile(name, content) {
  const data = new Uint8Array(Buffer.from(content));
  try {
    fs.writeFileSync(`storage/${name}`, data);
  } catch (err) {
    throw new Error('파일 생성중 오류가 발생했습니다');
  }
}

function editFile(name, content) {
  try {
    fs.accessSync(`storage/${name}`);
  } catch (err) {
    throw new Error('파일이 존재하지 않거나, 권한이 없습니다.');
  }

  saveFile(name, content);
}

function deleteFile(name) {
  try {
    fs.accessSync(`storage/${name}`);
  } catch (err) {
    throw new Error('파일이 존재하지 않거나, 권한이 없습니다.');
  }

  fs.rmSync(`storage/${name}`);
}

exports.getFileList = getFileList;
exports.getFile = getFile;
exports.createFile = createFile;
exports.saveFile = saveFile;
exports.editFile = editFile;
exports.deleteFile = deleteFile;
