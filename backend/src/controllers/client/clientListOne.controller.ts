import { Request, Response } from "express";
import listOneClientService from "../../services/client/clientListOne.service";

const listOneClientController = async (req: Request, res: Response) => {

    const { id } = req.params;

    const client = await listOneClientService( id );

    return res.status(200).json(client);
};

export default listOneClientController;