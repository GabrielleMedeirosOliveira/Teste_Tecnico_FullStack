import { Response, Request } from "express";
import contactCreateService from "../../services/contact/contactCreate.service";

const contactCreateController = async (req: Request, res: Response) => {
  const data = req.body;

  const contactCreated = await contactCreateService(data);

  return res.status(201).json(contactCreated);
};

export default contactCreateController;