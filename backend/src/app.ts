import express, { Request, Response } from "express"
import { errorMiddleware } from "./middlewares/error.middleware"
import "reflect-metadata"
import "express-async-errors"
import { appRoutes } from "./routes"

const app = express()

app.use(express.json())

appRoutes(app)

app.get('/', (req: Request, res: Response) => {

    res.status(200).json({
        message: "Hello World"
    })
})

app.use(errorMiddleware)

export default app