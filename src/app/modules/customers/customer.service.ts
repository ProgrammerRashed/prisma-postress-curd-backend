import { Customer } from '@prisma/client';
import prisma from '../../../utils/Prisma';


const createCustomerIntoDB = async (payload: Customer) => {
  const result = await prisma.customer.create({
    data: payload,
  });
  return result;
};

const getAllCustomerFromDB = async () => {
  const result = await prisma.customer.findMany();
  return result;
};

const updateCustomerIntoDB = async (id: string, payload: Partial<Customer>) => {
  const result = await prisma.customer.update({
    where: {
      customerId: id,
    },
    data: payload,
  });
  return result;
};

const getSingleCustomerFromDB = async (id: string) => {
  const result = await prisma.customer.findUnique({
    where: {
      customerId: id,
    },
  });
  return result;
};

const deleteSingleCustomerFromDB = async (id: string) => {
  const result = await prisma.customer.delete({
    where: {
      customerId: id,
    },
  });
  return result;
};

export const CustomerService = {
  createCustomerIntoDB,
  getAllCustomerFromDB,
  updateCustomerIntoDB,
  getSingleCustomerFromDB,
  deleteSingleCustomerFromDB,
};
