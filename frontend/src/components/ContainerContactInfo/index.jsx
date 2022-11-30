import { useContext } from "react";
import { ContactDataContext } from "../../context/contactData";
import style from "./style.module.css";

export const ContainerContactInfo = () => {
  const { contactsData } = useContext(ContactDataContext);

  return (
    <>
      <ul>
        {
          contactsData.map(contact => (
              <li>
                <div key={contact.id}>
                  <p>{contact.name}</p>
                  <p>{contact.email}</p>
                  <p>{contact.fone}</p>
                  <p>{contact.client.name}</p>
                </div>
              </li>
          ))
        }
      </ul>
    </>
  );
};