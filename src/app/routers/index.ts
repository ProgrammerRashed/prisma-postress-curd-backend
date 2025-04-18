import express from "express";
import { customerRouter } from "../modules/customers/customer.route";
import { bikeRouter } from "../modules/bikes/bikes.route";
import { serviceRouter } from "../modules/services/services.route";

const router = express.Router();

const moduleRouter = [
  {
    path: "/customers",
    route: customerRouter,
  },
  {
    path: "/bikes",
    route: bikeRouter,
  },
  {
    path: "/services",
    route: serviceRouter,
  },
];

moduleRouter.forEach((route) => router.use(route.path, route.route));

export default router;
