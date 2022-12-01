import { useContext } from "react";
import { ClientDataContext } from "../../context/clientData";
import style from "./style.module.css";
import { ClientCard } from "../ClientCard";

export const ContainerClients = () => {
  const { clients } = useContext(ClientDataContext);
  return (
    <>
      <ul className={style.clientList}>
        {clients.map((client) => {
          return <ClientCard client={client} key={client.id} />;
        })}
      </ul>
    </>
  );
};