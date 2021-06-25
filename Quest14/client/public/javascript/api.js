"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Api_tempData;
class Api {
    constructor() {
        _Api_tempData.set(this, new Map());
    }
    getFileNameList() {
        return __awaiter(this, void 0, void 0, function* () {
            const fileNameList = (yield this.useFetch('POST', {
                query: `
          query {
            info {
              list
              lastFile
            }
          }
        `,
            }, '파일 목록을 불러오는 중 오류가 발생했습니다'));
            return fileNameList;
        });
    }
    getFile(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const resBody = (yield this.useFetch('POST', {
                query: `
          query {
            file(name: "${name}") {
              name
              content
            }
          }
        `,
            }, '파일을 불러오는 중 오류가 발생했습니다'));
            if (resBody)
                __classPrivateFieldGet(this, _Api_tempData, "f").set(name, { content: this.contentConcat(resBody.data.file.content) });
            return resBody;
        });
    }
    getFileTemp(name) {
        var _a, _b;
        return (_b = (_a = __classPrivateFieldGet(this, _Api_tempData, "f").get(name)) === null || _a === void 0 ? void 0 : _a.content) === null || _b === void 0 ? void 0 : _b.split('\n');
    }
    saveFile(name, content) {
        return __awaiter(this, void 0, void 0, function* () {
            const resBody = yield this.useFetch('POST', {
                query: `
          mutation {
            updateFile(name: "${name}" content: ${JSON.stringify(content)}){
              msg
            }
          }
        `,
            }, 'PUT 파일을 저장하는 중 오류가 발생했습니다');
            if (resBody)
                __classPrivateFieldGet(this, _Api_tempData, "f").set(name, { content: this.contentConcat(content) });
        });
    }
    saveFileAs(newName, content) {
        return __awaiter(this, void 0, void 0, function* () {
            const resBody = yield this.useFetch('POST', {
                query: `
          mutation {
            createFile(name: "${newName}" content:  ${JSON.stringify(content)}){
              msg
            }
          }
        `,
            }, '파일을 저장하는 중 오류가 발생했습니다');
            if (resBody)
                __classPrivateFieldGet(this, _Api_tempData, "f").set(newName, { content: this.contentConcat(content) });
        });
    }
    contentConcat(content) {
        let concated = '';
        content.forEach((line, index) => {
            concated += line;
            if (index < content.length - 1)
                concated += '\n';
        });
        return concated;
    }
    useFetch(method, body, errMsg) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = localStorage.getItem('token');
                const response = yield fetch('https://localhost:8000/graphql', {
                    method,
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-type': 'application/json',
                        'accept-encoding': 'gzip',
                    },
                    body: method === 'GET' ? undefined : JSON.stringify(body),
                });
                const resBody = yield response.json();
                if (response.ok)
                    return resBody;
                else {
                    location.href = '/login';
                    return Promise.reject(errMsg);
                }
            }
            catch (err) {
                console.log(err);
                console.log(errMsg);
                throw err;
            }
        });
    }
}
_Api_tempData = new WeakMap();
