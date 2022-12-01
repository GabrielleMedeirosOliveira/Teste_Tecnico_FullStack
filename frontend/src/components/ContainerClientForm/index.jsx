import { useContext } from "react";
import { ContactDataContext } from "../../context/contactData";
import { FormClient } from "../FormClient"
import style from "./style.module.css";


export const ContainerClientForm = () =>{

  const {handleNavigation} = useContext(ContactDataContext)

  const handleNavigate = () =>{
    handleNavigation()
  }

  return (
    <>
      <div className={style.container}>
        <h1 className={style.containerTitle}>Cadastre um cliente aqui!</h1>
        <FormClient/>
        <button onClick={handleNavigate} className={style.btn_register_contact}>Cadastrar Contato</button>
      </div>
    </>
  )
}