import { Request, Response } from "express";
import contactUpdateService from "../../services/contact/contactUpdate.service";

const contactUpdateController = async(req: Request, res:Response) =>{
    const {id} = req.params

    const data = req.body

    const contactUpdated = await contactUpdateService(id, data)

    return res.json(contactUpdated)
}

export default contactUpdateController