import { useContext } from "react";
import { ContactDataContext } from "../../context/contactData";
import style from "./style.module.css";

export const ContainerContacts = () => {
  const { contacts } = useContext(ContactDataContext);

  return (
    <>
      <ul className={style.clientList}>
        {
          contacts.map(contact =>{
            return contact.isActive === false ?
            (
              <li key={contact.id}>
                <div>
                  <p>Nome: {contact.name}</p>
                  <p>Email: {contact.email}</p>
                  <p>Telefone: {contact.fone}</p>
                  <p>Status: Deactivated</p>
                  <p>Cliente: {contact.client.name}</p>
                </div>
              </li>
          ):
          (
            <li key={contact.id}>
              <div>
                <p>Nome: {contact.name}</p>
                <p>Email: {contact.email}</p>
                <p>Telefone: {contact.fone}</p>
                <p>Status: Active</p>
                <p>Cliente: {contact.client.name}</p>
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