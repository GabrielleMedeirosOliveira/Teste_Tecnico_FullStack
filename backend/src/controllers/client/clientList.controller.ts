import {Response, Request} from "express"
import clientListService from "../../services/client/clientList.service"


const clientListController = async (req: Request, res: Response) =>{

    const clients = await clientListService()

    return res.json(clients)
}

export default clientListController