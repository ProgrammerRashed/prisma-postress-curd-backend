import httpStatus from "http-status";
import { ServicesService } from "./services.service";
import CatchAsync from "../../../utils/CatchAsync";
import SendResponse from "../../../utils/SendResponse";

const createService = CatchAsync(async (req, res) => {
  const result = await ServicesService.createServiceIntoDB(req.body);
  SendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Service created successfully.",
    data: result,
  });
});

const getAllServices = CatchAsync(async (req, res) => {
  const result = await ServicesService.getAllServicesFromDB();
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All services retrieved successfully.",
    data: result,
  });
});

const getSingleService = CatchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ServicesService.getSingleServiceFromDB(id);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service retrieved successfully.",
    data: result,
  });
});

const deleteService = CatchAsync(async (req, res) => {
  const { id } = req.params;
  await ServicesService.deleteSingleServiceFromDB(id);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service deleted successfully.",
    data: null,
  });
});

const updateService = CatchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ServicesService.updateServiceIntoDB(id, req.body);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service updated and marked as completed.",
    data: result,
  });
});

export const ServiceController = {
  createService,
  getAllServices,
  getSingleService,
  updateService,
  deleteService,
};
