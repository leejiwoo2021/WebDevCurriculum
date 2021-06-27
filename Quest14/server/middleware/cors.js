"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allowCors = void 0;
function allowCors(req, res, next) {
    res.append('Access-Control-Allow-Origin', '*');
    res.append('Access-Control-Allow-Methods', '*');
    res.append('Access-Control-Allow-Headers', '*');
    next();
}
exports.allowCors = allowCors;
// exports.allowCors = allowCors;
