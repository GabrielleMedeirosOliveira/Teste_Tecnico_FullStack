import { createContext, useState } from "react";
import { api } from "../server/api";

export const ClientDataContext = createContext();

export const ClientDataProvider = ({ children }) => {
  const [clientData, setClientData] = useState({});
  const [clients, setClients] = useState([]);
  const [client, setClient] = useState({});
  const [canSeeClients, setCanSeeClients] = useState(false)

  const getClientData = (data) => {
    api.post("/clients", data).then((res) =>{
       setClientData(res.data)
       setCanSeeClients(false)
      });
  };

  const getAllClients = () => {
    api.get("/clients").then((res) => setClients(res.data));
  };

  const getOneClient = (id) =>{
    api.get(`/clients/${id}/`).then((res) => setClient(res.data));
  }

  const updateClient = (id, data) => {
    api.patch(`/clients/${id}`, data)
  };

  const deleteClient = (id, setSucess) => {
    api.delete(`/clients/${id}`);
    setSucess(true);
  };

  return (
    <ClientDataContext.Provider
      value={{
        getClientData,
        clientData,
        clients,
        getAllClients,
        updateClient,
        getOneClient,
        deleteClient,
        canSeeClients,
        setCanSeeClients,
        client
      }}
    >
      {children}
    </ClientDataContext.Provider>
  );
};