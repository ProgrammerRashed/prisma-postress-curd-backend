"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRouter = void 0;
const express_1 = __importDefault(require("express"));
const services_controller_1 = require("./services.controller");
const router = express_1.default.Router();
router.post("/", services_controller_1.ServiceController.createService);
router.get("/", services_controller_1.ServiceController.getAllServices);
router.get("/status", services_controller_1.ServiceController.getOverdueServices);
router.get("/:id", services_controller_1.ServiceController.getSingleService);
router.put("/:id", services_controller_1.ServiceController.updateService);
router.delete("/:id", services_controller_1.ServiceController.deleteService);
exports.serviceRouter = router;
