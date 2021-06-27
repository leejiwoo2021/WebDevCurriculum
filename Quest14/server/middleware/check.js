"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idPw = exports.fileNameContent = exports.fileNameBody = exports.fileName = void 0;
function fileName(req, res, next) {
    var name = req.query.name;
    if (!name) {
        res.status(400);
        res.end('파일 이름 필드가 존재하지 않습니다');
        return;
    }
    next();
}
exports.fileName = fileName;
function fileNameBody(req, res, next) {
    var name = req.body.name;
    if (!name) {
        res.status(400);
        res.end('파일 이름 필드가 존재하지 않습니다');
        return;
    }
    next();
}
exports.fileNameBody = fileNameBody;
function fileNameContent(req, res, next) {
    var _a = req.body, name = _a.name, content = _a.content;
    if (!name || !content) {
        res.status(400);
        res.end('파일 이름 또는 내용 필드가 존재하지 않습니다');
        return;
    }
    next();
}
exports.fileNameContent = fileNameContent;
function idPw(req, res, next) {
    var _a = req.body, id = _a.id, pw = _a.pw;
    if (!id || !pw) {
        res.status(400);
        res.end('ID 또는 패스워드가 존재하지 않습니다');
        return;
    }
    next();
}
exports.idPw = idPw;
// exports.fileName = fileName;
// exports.fileNameContent = fileNameContent;
// exports.idPw = idPw;
// exports.fileNameBody = fileNameBody;
