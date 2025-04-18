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

const getOverdueServicesFromDB = async (): Promise<Service[]> => {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  return prisma.service.findMany({
    where: {
      status: {
        in: ['pending', 'in_progress'],
      },
      serviceDate: {
        lt: sevenDaysAgo,
      },
    },
  });
};


const getSingleServiceFromDB = async (id: string): Promise<Service | null> => {
  return prisma.service.findUniqueOrThrow({  where: {
    serviceId: id,
  }});
};

const updateServiceIntoDB = async (
  id: string,
  payload: UpdateServiceInput
): Promise<Service> => {
  return prisma.service.update({
    where: {
      serviceId: id,
    },
    data: {
      ...payload,
      status: "done",
    },
  });
};

const deleteSingleServiceFromDB = async (id: string): Promise<Service> => {
  return prisma.service.delete({ where: {  serviceId: id } });
};

export const ServicesService = {
  createServiceIntoDB,
  getAllServicesFromDB,
  getOverdueServicesFromDB,
  getSingleServiceFromDB,
  updateServiceIntoDB,
  deleteSingleServiceFromDB,
};
