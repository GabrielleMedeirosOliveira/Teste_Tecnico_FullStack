import express, { Request, Response } from "express"
import cors from "cors"
import { errorMiddleware } from "./middlewares/error.middleware"
import "reflect-metadata"
import "express-async-errors"
import { appRoutes } from "./routes"

const app = express()

app.use(express.json())

app.use(cors())

appRoutes(app)

app.get('/', (req: Request, res: Response) => {

    res.status(200).json({
        message: "Hello World"
    })
})

app.use(errorMiddleware)

export default app