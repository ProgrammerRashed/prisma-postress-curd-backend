import express, { Application, NextFunction, Request, Response } from "express"
import cors from "cors"
import globalErrorHandler from "./app/middlewares/globalErrorHandler"
const app: Application = express()

import httpStatus from "http-status";
import router from "./app/routers"
app.use(cors())

// Parsher 
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req: Request, res: Response)=>{
    res.send({
        message: "Server is up and running"
    })
})



app.use("/api", router);

app.use(globalErrorHandler);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: "API NOT FOUND!",
        error: {
            path: req.originalUrl,
            message: "Your requested path is not found!"
        }
    })
})
export default app