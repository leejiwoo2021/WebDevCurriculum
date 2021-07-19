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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateFile = exports.createFile = exports.getFile = exports.getFileList = exports.auth = exports.init = void 0;
/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/no-empty-interface */
var sequelize_1 = require("sequelize");
var bcrypt_1 = __importDefault(require("bcrypt"));
var sequelize = new sequelize_1.Sequelize('textEditor', process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
});
var User = sequelize.define('User', {
    id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
});
var File = sequelize.define('File', {
    id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        references: {
            model: User,
            key: 'id',
        },
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: sequelize_1.DataTypes.STRING(20000),
        allowNull: false,
        unique: false,
    },
});
function init() {
    return __awaiter(this, void 0, void 0, function () {
        function setModel() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, sequelize.sync({ force: true })];
                        case 1:
                            _a.sent();
                            console.log('\n*** 테이블 Model 생성 성공. ***\n');
                            return [2 /*return*/];
                    }
                });
            });
        }
        function setUserList() {
            return __awaiter(this, void 0, void 0, function () {
                var saltRounds, password, salt, hash;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            saltRounds = 10;
                            password = 'qwer1234';
                            salt = bcrypt_1.default.genSaltSync(saltRounds);
                            hash = bcrypt_1.default.hashSync(password, salt);
                            return [4 /*yield*/, User.create({ name: 'test1', password: hash })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, User.create({ name: 'test2', password: hash })];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, User.create({ name: 'test3', password: hash })];
                        case 3:
                            _a.sent();
                            console.log('\n*** USER 목록 생성 성공. ***\n');
                            return [2 /*return*/];
                    }
                });
            });
        }
        function setFileList() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, File.create({
                                user_id: 1,
                                name: '테스트 파일 1',
                                content: '[\"첫번째 계정의 테스트 파일입니다\"]',
                            })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, File.create({
                                    user_id: 1,
                                    name: '테스트 파일 2',
                                    content: '[\"첫번째 계정의 두번째 테스트 파일입니다\"]',
                                })];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, File.create({
                                    user_id: 2,
                                    name: '테스트 파일 1',
                                    content: '[\"두번째 계정의 테스트 파일입니다\"]',
                                })];
                        case 3:
                            _a.sent();
                            console.log('\n*** File 목록 생성 성공. ***\n');
                            return [2 /*return*/];
                    }
                });
            });
        }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, setModel()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, setUserList()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, setFileList()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.init = init;
function auth(id, password) {
    return __awaiter(this, void 0, void 0, function () {
        var user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, User.findOne({ where: { name: id } })];
                case 1:
                    user = _a.sent();
                    if (user) {
                        return [2 /*return*/, bcrypt_1.default.compareSync(password, user.password)];
                    }
                    else {
                        return [2 /*return*/, false];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.auth = auth;
function getFileList(userName) {
    return __awaiter(this, void 0, void 0, function () {
        var user, files, info;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, User.findOne({ where: { name: userName } })];
                case 1:
                    user = _a.sent();
                    return [4 /*yield*/, File.findAll({
                            where: { user_id: user === null || user === void 0 ? void 0 : user.id },
                            order: sequelize_1.Sequelize.literal('updatedAt DESC'),
                            // 대소문자?
                        })];
                case 2:
                    files = _a.sent();
                    info = {
                        fileList: [],
                        lastFile: files.length > 0 ? files[0].name : '',
                    };
                    if (files) {
                        files.forEach(function (file) {
                            info.fileList.push(file.name);
                        });
                    }
                    return [2 /*return*/, info];
            }
        });
    });
}
exports.getFileList = getFileList;
function getFile(userName, fileName) {
    return __awaiter(this, void 0, void 0, function () {
        var user, file;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, User.findOne({ where: { name: userName } })];
                case 1:
                    user = _a.sent();
                    return [4 /*yield*/, File.findOne({
                            where: {
                                user_id: user === null || user === void 0 ? void 0 : user.id,
                                name: fileName,
                            },
                        })];
                case 2:
                    file = _a.sent();
                    return [4 /*yield*/, sequelize.query("UPDATE Files SET updatedAt = NOW() WHERE id = " + (file === null || file === void 0 ? void 0 : file.id))];
                case 3:
                    _a.sent();
                    if (file)
                        return [2 /*return*/, file.content];
                    else
                        return [2 /*return*/, ''];
                    return [2 /*return*/];
            }
        });
    });
}
exports.getFile = getFile;
function createFile(userName, fileName, content) {
    return __awaiter(this, void 0, void 0, function () {
        var user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, User.findOne({ where: { name: userName } })];
                case 1:
                    user = _a.sent();
                    if (!(user === null || user === void 0 ? void 0 : user.id)) return [3 /*break*/, 3];
                    return [4 /*yield*/, File.create({
                            user_id: user.id,
                            name: fileName,
                            content: content,
                        })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.createFile = createFile;
function updateFile(userName, fileName, content) {
    return __awaiter(this, void 0, void 0, function () {
        var user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, User.findOne({ where: { name: userName } })];
                case 1:
                    user = _a.sent();
                    return [4 /*yield*/, File.update({ content: content }, {
                            where: {
                                user_id: user === null || user === void 0 ? void 0 : user.id,
                                name: fileName,
                            },
                        })];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.updateFile = updateFile;
// exports.init = init;
// exports.auth = auth;
// exports.getFileList = getFileList;
// exports.getFile = getFile;
// exports.createFile = createFile;
// exports.updateFile = updateFile;
