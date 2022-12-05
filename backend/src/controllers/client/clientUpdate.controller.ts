import { Request, Response } from "express";
import clientUpdateService from "../../services/client/clientUpdate.service";

const clientUpdateController = async(req: Request, res:Response) =>{
    const {id} = req.params

    const data = req.body

    const clientUpdated = await clientUpdateService(id, data)

    return res.json(clientUpdated)
}

export default clientUpdateController