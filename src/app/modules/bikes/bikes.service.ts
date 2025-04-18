import { Bike } from "../../../generated/prisma";
import prisma from "../../../utils/Prisma";

const createBikeIntoDB = async (payload: Bike) => {
  const result = await prisma.bike.create({
    data: payload,
  });
  return result;
};

const getAllBikeFromDB = async () => {
  const result = await prisma.bike.findMany();
  return result;
};

const updateBikeIntoDB = async (id: string, payload: Partial<Bike>) => {
  const result = await prisma.bike.update({
    where: {
      bikeId: id,
    },
    data: payload,
  });
  return result;
};

const getSingleBikeFromDB = async (id: string) => {
  const result = await prisma.bike.findUniqueOrThrow({
    where: {
      bikeId: id,
    },
  });
  return result;
};

const deleteSingleBikeFromDB = async (id: string) => {
  const result = await prisma.bike.delete({
    where: {
      bikeId: id,
    },
  });
  return result;
};

export const bikeService = {
  createBikeIntoDB,
  getAllBikeFromDB,
  getSingleBikeFromDB,
  updateBikeIntoDB,
  deleteSingleBikeFromDB,
};
