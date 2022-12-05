import express, { Request, Response } from "express"
import { errorMiddleware } from "./middlewares/error.middleware"

const app = express()

app.use(express.json())

app.get('/', (req: Request, res: Response) => {

    res.status(200).json({
        message: "Hello World"
    })
})

app.use(errorMiddleware)

export default app