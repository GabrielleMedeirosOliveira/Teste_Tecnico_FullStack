import { useContext} from "react";
import { ClientDataContext } from "../../context/clientData";
import { ContainerClients } from "../ContainerClients";
import { ContainerClientForm } from "../ContainerClientForm"
import style from "./style.module.css";

export const ContainerRegisterClient = () =>{

  const {getAllClients, canSeeClients, setCanSeeClients} = useContext(ClientDataContext)

  const getClients = () =>{
    setCanSeeClients(!canSeeClients)
    getAllClients()
  }
  return (
    <>
      <div className={style.container}>
        <ContainerClientForm/>
        <button onClick={getClients} className={style.btn_get_clients}>Ver Clientes</button>
        {
          canSeeClients ?
          (
            <>
              <ContainerClients/>
            </>
          ) :
          (
            <>
            
            </>
          )
        }
      </div>
    </>
  )
}