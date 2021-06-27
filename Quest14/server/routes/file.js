"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var checker = __importStar(require("../middleware/check.js"));
var auth = __importStar(require("../middleware/auth.js"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var storage = __importStar(require("../model/sequelize.js"));
router.get('/', auth.verifyJWT, checker.fileName, function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var content, name, token, decoded, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    name = req.query.name;
                    token = req.token;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    if (!token) return [3 /*break*/, 3];
                    decoded = jsonwebtoken_1.default.verify(token, 'jwSecret');
                    return [4 /*yield*/, storage.getFile(decoded.id, name)];
                case 2:
                    content = _a.sent();
                    _a.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    err_1 = _a.sent();
                    console.log(err_1);
                    res.status(404);
                    res.send(err_1.toString());
                    return [2 /*return*/];
                case 5:
                    res.status(200);
                    res.json({
                        name: name,
                        content: content,
                    });
                    return [2 /*return*/];
            }
        });
    });
});
router.post('/', auth.verifyJWT, checker.fileNameBody, function (req, res) {
    var _a = req.body, name = _a.name, content = _a.content;
    var token = req.token;
    try {
        if (token) {
            var decoded = jsonwebtoken_1.default.verify(token, 'jwSecret');
            storage.createFile(decoded.id, name, content);
        }
    }
    catch (err) {
        console.log(err);
        res.status(404);
        res.send(err.toString());
        return;
    }
    res.status(200);
    res.json({
        msg: 'success',
    });
});
router.put('/', auth.verifyJWT, checker.fileNameContent, function (req, res) {
    var _a = req.body, name = _a.name, content = _a.content;
    var token = req.token;
    try {
        if (token) {
            var decoded = jsonwebtoken_1.default.verify(token, 'jwSecret');
            storage.updateFile(decoded.id, name, content);
        }
    }
    catch (err) {
        console.log(err);
        res.status(404);
        res.send(err.toString());
        return;
    }
    res.status(200);
    res.json({
        msg: 'success',
    });
});
// router.delete('/', auth.verifyJWT, function (req, res) {
//   const { name } = req.body;
//   const token = req.token;
//   const decoded = jwt.verify(token, 'jwSecret');
//   try {
//     // fileModel.deleteFile(decoded.id, name);
//   } catch (err) {
//     console.log(err);
//     res.status(404);
//     res.send(err.toString());
//     return;
//   }
//   res.status(200);
//   res.json({
//     msg: 'success',
//   });
// });
module.exports = router;
