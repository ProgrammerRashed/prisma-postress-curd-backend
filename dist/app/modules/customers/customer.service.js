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
exports.CustomerService = void 0;
const Prisma_1 = __importDefault(require("../../../utils/Prisma"));
const createCustomerIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Prisma_1.default.customer.create({
        data: payload,
    });
    return result;
});
const getAllCustomerFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Prisma_1.default.customer.findMany();
    return result;
});
const updateCustomerIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Prisma_1.default.customer.update({
        where: {
            customerId: id,
        },
        data: payload,
    });
    return result;
});
const getSingleCustomerFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Prisma_1.default.customer.findUnique({
        where: {
            customerId: id,
        },
    });
    return result;
});
const deleteSingleCustomerFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Prisma_1.default.customer.delete({
        where: {
            customerId: id,
        },
    });
    return result;
});
exports.CustomerService = {
    createCustomerIntoDB,
    getAllCustomerFromDB,
    updateCustomerIntoDB,
    getSingleCustomerFromDB,
    deleteSingleCustomerFromDB,
};
