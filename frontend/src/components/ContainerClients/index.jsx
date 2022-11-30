import { useContext } from "react";
import { ClientDataContext } from "../../context/clientData";
import style from "./style.module.css";


export const ContainerClients = () => {
  const { clients } = useContext(ClientDataContext);

  const handleClient = (id) =>{
    console.log(id)
  }

  return (
    <>
      <ul className={style.clientList}>
        {
          clients.map(client =>{
            return client.isActive === false ?
            (
              <li key={client.id}>
                <div>
                  <p>Nome: {client.name}</p>
                  <p>Email: {client.email}</p>
                  <p>Telefone: {client.fone}</p>
                  <p>Status: Deactivated</p>
                  <p>Criado em: {client.createdAt}</p>
                    <div>
                      <button onClick={()=> handleClient(client.id)}>Editar</button>
                      <button onClick={()=> handleClient(client.id)}>Excluir</button>
                    </div>
                </div>
              </li>
          ):
          (
            <li key={client.id}>
              <div>
                <p>Nome: {client.name}</p>
                <p>Email: {client.email}</p>
                <p>Telefone: {client.fone}</p>
                <p>Status: Active</p>
                <p>Criado em: {client.createdAt}</p>
                    <div>
                      <button onClick={()=> handleClient(client.id)}>Editar</button>
                      <button onClick={()=> handleClient(client.id)}>Excluir</button>
                    </div>
              </div>
            </li>
          )
        }
          )
        }
      </ul>
    </>
  )
};