import { FormContact } from "../FormContact"
import style from "./style.module.css";


export const ContainerContactForm = () =>{
  return (
    <>
      <div className={style.container}>
        <h1>Cadastre um Contato</h1>
        <FormContact/>
      </div>
    </>
  )
}