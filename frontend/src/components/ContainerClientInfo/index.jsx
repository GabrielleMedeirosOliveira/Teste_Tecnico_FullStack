import { useContext } from "react";
import { ClientDataContext } from "../../context/clientData";
import style from "./style.module.css";


export const ContainerClientInfo = () => {
  const { clientData } = useContext(ClientDataContext);

  return (
    <>
      <div>
        <p>{clientData.id}</p>
        <p>{clientData.name}</p>
        <p>{clientData.email}</p>
        <p>{clientData.fone}</p>
        <p>{clientData.createdAt}</p>
      </div>
    </>
  );
};