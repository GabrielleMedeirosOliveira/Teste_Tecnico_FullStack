import { Request, Response } from "express";
import clientDeleteService from "../../services/client/clientDelete.service";


const clientDeleteController = async(req: Request, res:Response) =>{
    const {id} = req.params

    const response = await clientDeleteService(id)

    return res.json(response)
}

export default clientDeleteController