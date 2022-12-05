import express, { Request, Response, NextFunction } from "express"
// import { errorMiddleware } from "./middlewares/error.middleware"
import routes from "./routes"
import "reflect-metadata"
import "express-async-errors"
import { errorHandler } from "./errors/appError"

const app = express()

app.use(express.json())

app.use("/clients", routes)

app.get('/', (req: Request, res: Response) => {

    res.status(200).json({
        message: "Hello World"
    })
})

app.use((err: Error, _: Request, res: Response, __: NextFunction) => {
    return errorHandler(err, res);
});


export default app