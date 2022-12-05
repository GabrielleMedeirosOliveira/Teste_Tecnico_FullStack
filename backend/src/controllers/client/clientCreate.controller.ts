import {Response, Request} from "express"
import clientCreateService from "../../services/client/clientCreate.service"


const clientCreateController = async (req: Request, res: Response) =>{
    const {name, email, fone} = req.body

    const clientCreated = await clientCreateService({name, email, fone})

    return res.status(201).json(clientCreated)
}

export default clientCreateController