import { Request, response, Response } from "express"
import { userService } from "./user.services"

const createAdmin = async (req: Request, res: Response) => {
   const data = req.body
   const result = await userService.createAdmin(data)
   res.send(result)
}


export const userController = {
    createAdmin
}