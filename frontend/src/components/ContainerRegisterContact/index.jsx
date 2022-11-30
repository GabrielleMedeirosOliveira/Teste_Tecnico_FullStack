import { useContext, useState } from "react";
import { ContactDataContext } from "../../context/contactData";
import { ContainerContactForm } from "../ContainerContactForm";
import { ContainerContacts } from "../ContainerContacts";
import style from "./style.module.css";

export const ContainerRegisterContact= () =>{
  const {getAllContacts} = useContext(ContactDataContext)
  const [canSeeContacts, setCanSeeContacts] = useState(false)
  const getContacts = () =>{

    setCanSeeContacts(!canSeeContacts)

    getAllContacts()

  }
  return (
    <div className={style.container}>
        <ContainerContactForm/>
        <button onClick={getContacts} className={style.btn_get_contacts}>Ver contatos</button>
        {
          canSeeContacts ?
          (
            <>
              <ContainerContacts/>
            </>
          ) :
          (
            <>
            </>
          )
        }
    </div>
  )
}