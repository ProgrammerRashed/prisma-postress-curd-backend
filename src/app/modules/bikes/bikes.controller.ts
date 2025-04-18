import httpStatus from "http-status";
import { bikeService } from "./bikes.service";
import SendResponse from "../../../utils/SendResponse";
import CatchAsync from "../../../utils/CatchAsync";

const createBike = CatchAsync(async (req, res) => {
  const result = await bikeService.createBikeIntoDB(req.body);
  SendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Bike created successfully.",
    data: result,
  });
});

const getAllBikes = CatchAsync(async (req, res) => {
  const result = await bikeService.getAllBikeFromDB();
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bikes retrieved successfully.",
    data: result,
  });
});

const getSingleBike = CatchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await bikeService.getSingleBikeFromDB(id);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bike retrieved successfully.",
    data: result,
  });
});

const deleteBike = CatchAsync(async (req, res) => {
  const { id } = req.params;
  await bikeService.deleteSingleBikeFromDB(id);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bike deleted successfully.",
    data: null,
  });
});

const updateBike = CatchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await bikeService.updateBikeIntoDB(id, req.body);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bike updated successfully.",
    data: result,
  });
});

export const BikeController = {
  createBike,
  getAllBikes,
  getSingleBike,
  updateBike,
  deleteBike,
};
