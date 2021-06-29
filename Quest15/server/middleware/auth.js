"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJWT = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function verifyJWT(req, res, next) {
    var _a;
    if (!req.get('Authorization')) {
        res.status(401);
        res.append('WWW-Authenticate', 'Bearer');
        res.json({
            message: 'no token',
        });
        return;
    }
    var token = (_a = req.get('Authorization')) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    try {
        if (token)
            jsonwebtoken_1.default.verify(token, 'jwSecret');
        else
            throw new Error('no token');
    }
    catch (err) {
        console.log('사용자 인증 실패, 만료되거나, 잘못된 토큰입니다');
        res.status(401);
        res.json({
            message: 'invalid token',
        });
        return;
    }
    req.token = token;
    next();
}
exports.verifyJWT = verifyJWT;
// exports.verifyJWT = verifyJWT;
