import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext, useEffect, useState} from "react";
import { ContactDataContext } from "../../context/contactData";
import style from "./style.module.css";
import { ClientDataContext } from "../../context/clientData";
import toast, { Toaster } from 'react-hot-toast';

export const FormContact = () => {
  const { getContactData } = useContext(ContactDataContext);
  const { getAllClients, clients } = useContext(ClientDataContext);
  const [ name, setName ] = useState('');
  const [ email, setEmail] = useState('');
  const [ fone, setFone] = useState("");

  const notify = () => toast.success('Contato Cadastrado com Sucesso');

  const formSchema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório!"),
    email: yup.string().required("Campo Obrigatório!"),
    fone: yup.string().required("Campo Obrigatório!"),
    client_id: yup.string().required("Campo Obrigatório!"),
  });
  const { register, handleSubmit, formState: { errors }, } = useForm({
    resolver: yupResolver(formSchema),
  });

  const clearForm = () => {
    setName('')
    setEmail('')
    setFone('')
  }

  const onSubmit = (data) => {
    getContactData(data);
    notify();
    clearForm()
  };

  useEffect(() => {
    getAllClients()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
     <Toaster />
      <form onSubmit={handleSubmit(onSubmit)} className={style.container}>
        <label className={style.inputLabel}>Nome:</label>
        <input 
          type="text" 
          name="name" 
          placeholder="Nome Completo"
          {...register("name")} 
          className={style.input}
          value={name}
          onChange={ev => setName(ev.target.value)}
        />
        {<span>{errors.name?.message}</span>}
        <label className={style.inputLabel}>Email:</label>
        <input 
          type="email" 
          name="email" 
          placeholder="email@email.com"
          {...register("email")} 
          className={style.input} 
          value={email}
          onChange={ev => setEmail(ev.target.value)}
        />
        {<span>{errors.email?.message}</span>}
        <label className={style.inputLabel}>Telefone:</label>
        <input
          type="text"
          name="fone"
          placeholder="(11)94002-8922"
          {...register("fone")}
          className={style.input}
          value={fone}
          onChange={ev => setFone(ev.target.value)}
        />
        {<span>{errors.fone?.message}</span>}
        <label className={style.inputLabel}>Selecione Cliente:</label>
        <select name="client" id="client" {...register("client_id")} className={style.input}>
          {clients?.map((client) => {
            return (
              <option name="id" value={client.id} key={client.id}>
                {client.name}
              </option>
            );
          })}
        </select>
        <button type="submit" className={style.btn_register_contact}>Cadastrar Contato</button>
      </form>
    </>
  );
};