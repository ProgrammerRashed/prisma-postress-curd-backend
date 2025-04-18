import express from "express";
import { customerRouter } from "../modules/customers/customer.route";

const router = express.Router();

const moduleRouter = [
  {
    path: "/customers",
    route: customerRouter,
  },
];

moduleRouter.forEach((route) => router.use(route.path, route.route));

export default router;
