import { Service } from "../../../generated/prisma";
import prisma from "../../../utils/Prisma";

type CreateServiceInput = Omit<Service, "id" | "createdAt" | "updatedAt">;
type UpdateServiceInput = Partial<CreateServiceInput>;

const createServiceIntoDB = async (payload: CreateServiceInput): Promise<Service> => {
  return prisma.service.create({ data: payload });
};

const getAllServicesFromDB = async (): Promise<Service[]> => {
  return prisma.service.findMany({
    orderBy: { createdAt: "desc" },
  });
};

const getOverdueServicesFromDB = async ():Promise<Service[]> => {
  return prisma.service.findMany()
}

const getSingleServiceFromDB = async (id: string): Promise<Service | null> => {
  return prisma.service.findUnique({ where: { id } });
};

const updateServiceIntoDB = async (
  id: string,
  payload: UpdateServiceInput
): Promise<Service> => {
  return prisma.service.update({
    where: { id },
    data: {
      ...payload,
      status: "DONE",
    },
  });
};

const deleteSingleServiceFromDB = async (id: string): Promise<Service> => {
  return prisma.service.delete({ where: { id } });
};

export const ServicesService = {
  createServiceIntoDB,
  getAllServicesFromDB,
  getOverdueServicesFromDB,
  getSingleServiceFromDB,
  updateServiceIntoDB,
  deleteSingleServiceFromDB,
};
