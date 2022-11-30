import { createContext, useState} from "react";
import { api } from "../server/api";

export const ClientDataContext = createContext();

export const ClientDataProvider = ({children}) =>{

    const [clientData, setClientData] = useState({});
    const [clients, setClients] = useState([]);

    const getClientData = (data) =>{
        api.post("/clients", data)
        .then(res => setClientData(res.data))
    }

    const getAllClients = () =>{
        api.get("/clients")
        .then(res => setClients(res.data))
    }

    const updateClient = (id, data) =>{
        console.log(id, data)
    }

    return(
        <ClientDataContext.Provider value={{getClientData, clientData, clients, getAllClients}}>
            {children}
        </ClientDataContext.Provider>
    )

}