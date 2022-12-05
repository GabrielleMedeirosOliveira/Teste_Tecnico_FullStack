import { Router } from "express";
import clientCreateController from "../controllers/client/clientCreate.controller";
import clientDeleteController from "../controllers/client/clientDelete.controller";
import clientListController from "../controllers/client/clientList.controller";
import clientUpdateController from "../controllers/client/clientUpdate.controller";

const routes = Router();

export const clientRoutes = () =>{
    routes.post("", clientCreateController)
    routes.get("", clientListController)
    routes.delete("/:id", clientDeleteController)
    routes.patch("/:id", clientUpdateController)

    return routes;
}