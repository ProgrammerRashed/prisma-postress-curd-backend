"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SendResponse = (res, jsondata) => {
    res.status(jsondata.statusCode).json({
        success: jsondata.success,
        message: jsondata.message,
        meta: jsondata.meta || null || undefined,
        data: jsondata.data || null || undefined
    });
};
exports.default = SendResponse;
