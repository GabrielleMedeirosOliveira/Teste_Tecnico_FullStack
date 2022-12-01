import { useState } from "react";
import { DeleteContactModal } from "../deleteContactModal";
import ContactModal from "../modalContactUpdate";
import style from "./style.module.css"

export const ContactCard = ({ contact }) => {
  const [open, setOpen] = useState(false);
  const handleModal = () => setOpen(!open);

  return (
    <>
      <li key={contact.id} className={style.itemList}>
        <div className={style.clientCard}>
          <p className={style.clientInfo}>Cliente: {contact.client.name}</p>
          <p className={style.clientInfo}>Nome: {contact.name}</p>
          <p className={style.clientInfo}>Email: {contact.email}</p>
          <p className={style.clientInfo}>Telefone: {contact.fone}</p>
          {contact.isActive ? (
            <p className={style.clientInfo}>Status: Active</p>
          ) : (
            <p className={style.clientInfo}>Status: Deactivated</p>
          )}
          <div className={style.clientCardContainerBtn}>
            <button className={style.clientCardEditBtn} onClick={handleModal}>Editar</button>

            <DeleteContactModal id={contact.id} />
          </div>
        </div>
      </li>
      <ContactModal open={open} handleModal={handleModal} contact={contact} />
    </>
  );
};