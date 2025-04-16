import express, { Request, Response } from "express"

const router = express.Router()

router.get("/health", (req: Request, res: Response)=>{
    res.send({
        message: "Server is working properly :)"
    })
})


export const userRoutes = router