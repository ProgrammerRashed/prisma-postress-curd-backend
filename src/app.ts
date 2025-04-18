import express, { Application, Request, Response } from "express"
import cors from "cors"
import { customerRouter } from "./app/modules/customers/customer.route"
const app: Application = express()


app.use(cors())

// Parsher 
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req: Request, res: Response)=>{
    res.send({
        message: "Server is up and running"
    })
})



app.use("/api", customerRouter)
export default app