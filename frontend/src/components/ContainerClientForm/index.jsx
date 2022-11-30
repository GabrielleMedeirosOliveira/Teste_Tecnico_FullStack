import { FormClient } from "../FormClient"
import style from "./style.module.css";


export const ContainerClientForm = () =>{
  return (
    <>
      <div className={style.container}>
        <h1>Cadastre um cliente aqui!</h1>
        <FormClient/>
      </div>
    </>
  )
}