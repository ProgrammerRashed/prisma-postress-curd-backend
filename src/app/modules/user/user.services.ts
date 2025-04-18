import bcrypt from "bcrypt";
import { PrismaClient, UserRole } from "../../../generated/prisma"
const prisma = new PrismaClient();


const createAdmin = async (data:any) => {
  const hashedPass = bcrypt.hashSync(data.password, 8);

  const userData = {
    email: data.email,
    password: hashedPass,
    role: UserRole.ADMIN,
  }

  const adminData = {
    name: data.name,
    email: data.email,
    contactNumber: data.contactNumber
  }

  // const startTransaction = 

  const result = await prisma.$transaction(async(transactionClient) =>{

    const createdUserData = await transactionClient.user.create({
        data: userData
    })
    
    const createdAdminData = await transactionClient.admin.create({
        data: adminData
    })

    return createdAdminData;

  })


   return result;
}

export const userService = {
    createAdmin
}