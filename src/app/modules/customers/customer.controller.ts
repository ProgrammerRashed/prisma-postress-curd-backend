import CatchAsync from "../../../utils/CatchAsync";
import SendResponse from "../../../utils/SendResponse";
import httpStatus from "http-status";
import { CustomerService } from "./customer.service";



const createCustomer = CatchAsync(async (req, res) => {
  const result = await CustomerService.createCustomerIntoDB(req.body);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer Created Successfully!!",
    data: result,
  });
});

const getAllCustomers = CatchAsync(async (req, res) => {
  const result = await CustomerService.getAllCustomerFromDB();
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customers Retrived Successfully!",
    data: result,
  });
});

const getSingleCustomers = CatchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CustomerService.getSingleCustomerFromDB(id);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer Retrived Successfully!",
    data: result,
  });
});

const deleteCustomer = CatchAsync(async (req, res) => {
  const { id } = req.params;
  await CustomerService.deleteSingleCustomerFromDB(id);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer Deleted Successfully!",
    data: null,
  });
});

const updateCustomer = CatchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CustomerService.updateCustomerIntoDB(id, req.body);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer Updated successfully!",
    data: result,
  });
});

export const CustomerController = {
  createCustomer,
  getAllCustomers,
  getSingleCustomers,
  updateCustomer,
  deleteCustomer,
};
