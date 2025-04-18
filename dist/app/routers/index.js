"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const customer_route_1 = require("../modules/customers/customer.route");
const bikes_route_1 = require("../modules/bikes/bikes.route");
const services_route_1 = require("../modules/services/services.route");
const router = express_1.default.Router();
const moduleRouter = [
    {
        path: "/customers",
        route: customer_route_1.customerRouter,
    },
    {
        path: "/bikes",
        route: bikes_route_1.bikeRouter,
    },
    {
        path: "/services",
        route: services_route_1.serviceRouter,
    },
];
moduleRouter.forEach((route) => router.use(route.path, route.route));
exports.default = router;
