import express from "express";
import { BikeController } from "./bikes.controller";

const router = express.Router();

router.post("/", BikeController.createBike);
router.get("/", BikeController.getAllBikes);
router.get("/:id", BikeController.getSingleBike);
router.put("/:id", BikeController.updateBike);
router.delete("/:id", BikeController.deleteBike);

export const bikeRouter = router;
