import { Request, Response } from "express";
import contactDeleteService from "../../services/contact/contactDelete.service";


const contactDeleteController = async(req: Request, res:Response) =>{
    const {id} = req.params

    const response = await contactDeleteService(id)

    return res.json(response)
}

export default contactDeleteController