import CatchAsync from "../../../utils/CatchAsync";
import SendResponse from "../../../utils/SendResponse";
import httpStatus from "http-status";
import { CustomerService } from "./customer.service";

const createCustomer = CatchAsync(async (req, res) => {
  const result = await CustomerService.createCustomerIntoDB(req.body);
  SendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Customer created successfully.",
    data: result,
  });
});

const getAllCustomers = CatchAsync(async (req, res) => {
  const result = await CustomerService.getAllCustomerFromDB();
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customers retrieved successfully.",
    data: result,
  });
});

const getSingleCustomer = CatchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CustomerService.getSingleCustomerFromDB(id);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer retrieved successfully.",
    data: result,
  });
});

const deleteCustomer = CatchAsync(async (req, res) => {
  const { id } = req.params;
  await CustomerService.deleteSingleCustomerFromDB(id);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer deleted successfully.",
    data: null,
  });
});

const updateCustomer = CatchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CustomerService.updateCustomerIntoDB(id, req.body);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer updated successfully.",
    data: result,
  });
});

export const CustomerController = {
  createCustomer,
  getAllCustomers,
  getSingleCustomer,
  updateCustomer,
  deleteCustomer,
};

