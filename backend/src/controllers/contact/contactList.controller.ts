import {Response, Request} from "express"
import contactListService from "../../services/contact/contactList.service"


const contactListController = async (req: Request, res: Response) =>{

    const contacts = await contactListService()

    return res.json(contacts)
}

export default contactListController