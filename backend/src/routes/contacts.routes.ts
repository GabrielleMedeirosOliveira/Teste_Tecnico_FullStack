import { Router } from "express";
import contactCreateController from "../controllers/contact/contactCreate.controller";
import contactDeleteController from "../controllers/contact/contactDelete.controller";
import contactListController from "../controllers/contact/contactList.controller";
import listOneContactController from "../controllers/contact/contactListOne.controller";
import contactUpdateController from "../controllers/contact/contactUpdate.controller";

const routes = Router();

export const contactRoutes = () =>{
    routes.post("", contactCreateController)
    routes.get("", contactListController)
    routes.get("/:id", listOneContactController)
    routes.delete("/:id", contactDeleteController)
    routes.patch("/:id", contactUpdateController)

    return routes;
}