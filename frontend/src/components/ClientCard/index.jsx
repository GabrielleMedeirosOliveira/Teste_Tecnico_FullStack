import { useState } from "react";
import { DeleteClientModal } from "../deleteClientModal";
import ClientModal from "../modalClientUpdate";
import style from "./style.module.css";

export const ClientCard = ({ client }) => {
  const [open, setOpen] = useState(false);
  const handleModal = () => setOpen(!open);

  return (
    <>
      <li key={client.id} className={style.itemList}>
        <div className={style.clientCard}>
          <p className={style.clientInfo}>Nome: {client.name}</p>
          <p className={style.clientInfo}>Email: {client.email}</p>
          <p className={style.clientInfo}>Telefone: {client.fone}</p>
          {client.isActive ? (
            <p className={style.clientInfo}>Status: Active</p>
          ) : (
            <p className={style.clientInfo}>Status: Deactivated</p>
          )}

          <p className={style.clientInfo}>Criado em: {client.createdAt}</p>
          <div className={style.clientCardContainerBtn}>
            <button className={style.clientCardEditBtn} onClick={handleModal}>EDITAR</button>
            <DeleteClientModal id={client.id} />
          </div>
        </div>
      </li>
      <ClientModal open={open} handleModal={handleModal} client={client} />
    </>
  );
};