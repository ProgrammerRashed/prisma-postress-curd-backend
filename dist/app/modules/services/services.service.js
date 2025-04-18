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
exports.ServicesService = void 0;
const Prisma_1 = __importDefault(require("../../../utils/Prisma"));
const createServiceIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return Prisma_1.default.service.create({ data: payload });
});
const getAllServicesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    return Prisma_1.default.service.findMany({
        orderBy: { createdAt: "desc" },
    });
});
const getOverdueServicesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    return Prisma_1.default.service.findMany({
        where: {
            status: {
                in: ['pending', 'in_progress'],
            },
            serviceDate: {
                lt: sevenDaysAgo,
            },
        },
    });
});
const getSingleServiceFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return Prisma_1.default.service.findUniqueOrThrow({ where: {
            serviceId: id,
        } });
});
const updateServiceIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    return Prisma_1.default.service.update({
        where: {
            serviceId: id,
        },
        data: Object.assign(Object.assign({}, payload), { status: "done" }),
    });
});
const deleteSingleServiceFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return Prisma_1.default.service.delete({ where: { serviceId: id } });
});
exports.ServicesService = {
    createServiceIntoDB,
    getAllServicesFromDB,
    getOverdueServicesFromDB,
    getSingleServiceFromDB,
    updateServiceIntoDB,
    deleteSingleServiceFromDB,
};
