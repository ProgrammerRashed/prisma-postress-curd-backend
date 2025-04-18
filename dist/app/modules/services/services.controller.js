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
exports.ServiceController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const services_service_1 = require("./services.service");
const CatchAsync_1 = __importDefault(require("../../../utils/CatchAsync"));
const SendResponse_1 = __importDefault(require("../../../utils/SendResponse"));
const createService = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_service_1.ServicesService.createServiceIntoDB(req.body);
    (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Service created successfully.",
        data: result,
    });
}));
const getAllServices = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_service_1.ServicesService.getAllServicesFromDB();
    (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "All services retrieved successfully.",
        data: result,
    });
}));
const getOverdueServices = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_service_1.ServicesService.getOverdueServicesFromDB();
    (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "All services retrieved successfully.",
        data: result,
    });
}));
const getSingleService = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield services_service_1.ServicesService.getSingleServiceFromDB(id);
    (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Service retrieved successfully.",
        data: result,
    });
}));
const deleteService = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield services_service_1.ServicesService.deleteSingleServiceFromDB(id);
    (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Service deleted successfully.",
        data: null,
    });
}));
const updateService = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield services_service_1.ServicesService.updateServiceIntoDB(id, req.body);
    (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Service updated and marked as completed.",
        data: result,
    });
}));
exports.ServiceController = {
    createService,
    getAllServices,
    getOverdueServices,
    getSingleService,
    updateService,
    deleteService,
};
