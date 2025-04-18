"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeRouter = void 0;
const express_1 = __importDefault(require("express"));
const bikes_controller_1 = require("./bikes.controller");
const router = express_1.default.Router();
router.post("/", bikes_controller_1.BikeController.createBike);
router.get("/", bikes_controller_1.BikeController.getAllBikes);
router.get("/:id", bikes_controller_1.BikeController.getSingleBike);
router.put("/:id", bikes_controller_1.BikeController.updateBike);
router.delete("/:id", bikes_controller_1.BikeController.deleteBike);
exports.bikeRouter = router;
