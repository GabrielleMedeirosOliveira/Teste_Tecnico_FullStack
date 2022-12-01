import { useContext} from "react";
import { ClientDataContext } from "../../context/clientData";
import { ContactDataContext } from "../../context/contactData";
import { ContainerContactForm } from "../ContainerContactForm";
import { useForm } from "react-hook-form";
import { ContainerContacts } from "../ContainerContacts";
import style from "./style.module.css";


export const ContainerRegisterContact= () =>{

  const { canSeeContacts, getAllContactsOneClient} = useContext(ContactDataContext)
  const { clients} = useContext(ClientDataContext);

  const { register, handleSubmit } = useForm({});

  const handleClients = (id) =>{
    getAllContactsOneClient(id.client_id)
  }

  return (
    <div className={style.container}>

      <ContainerContactForm/>

      <form className={style.clientContactsContainer} onSubmit={handleSubmit(handleClients)}>

        <select name="client" id="client" {...register("client_id")} className={style.input}>
          <option value="" defaultValue={"Escolha o cliente"}>Escolha o cliente</option>
          {clients?.map((client) => {
            return (

              <option name="id" value={client.id} key={client.id}>
                {client.name}
              </option>
            );
          })}
        </select>

          <button type="submit" className={style.btn_get_contacts}>Ver contados</button>

      </form>
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