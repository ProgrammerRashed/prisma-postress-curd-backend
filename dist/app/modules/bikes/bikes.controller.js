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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const bikes_service_1 = require("./bikes.service");
const SendResponse_1 = __importDefault(require("../../../utils/SendResponse"));
const CatchAsync_1 = __importDefault(require("../../../utils/CatchAsync"));
const createBike = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bikes_service_1.bikeService.createBikeIntoDB(req.body);
    (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Bike added successfully.",
        data: result,
    });
}));
const getAllBikes = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bikes_service_1.bikeService.getAllBikeFromDB();
    (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Bikes retrieved successfully.",
        data: result,
    });
}));
const getSingleBike = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield bikes_service_1.bikeService.getSingleBikeFromDB(id);
    (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Bike retrieved successfully.",
        data: result,
    });
}));
const deleteBike = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield bikes_service_1.bikeService.deleteSingleBikeFromDB(id);
    (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Bike deleted successfully.",
        data: null,
    });
}));
const updateBike = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield bikes_service_1.bikeService.updateBikeIntoDB(id, req.body);
    (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Bike updated successfully.",
        data: result,
    });
}));
exports.BikeController = {
    createBike,
    getAllBikes,
    getSingleBike,
    updateBike,
    deleteBike,
};
