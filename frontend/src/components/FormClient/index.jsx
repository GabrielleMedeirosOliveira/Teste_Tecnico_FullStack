import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import style from "./style.module.css";
import { ClientDataContext } from "../../context/clientData";
import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react";

export const FormClient = () => {
  const { getClientData, getAllClients } = useContext(ClientDataContext);
  const [ name, setName ] = useState('');
  const [ email, setEmail] = useState('');
  const [ fone, setFone] = useState("");

  const notify = () => toast.success('Cliente Cadastrado com Sucesso');

  const formSchema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório!"),
    email: yup.string().required("Campo Obrigatório!"),
    fone: yup.string().required("Campo Obrigatório!"),
  });
  const { register, handleSubmit, formState:{errors}, } = useForm({
    resolver: yupResolver(formSchema),
  });

  const clearForm = () => {
    setName('')
    setEmail('')
    setFone('')
  }

  const onSubmit = (data) => {
    getClientData(data)
    getAllClients()
    notify()
    clearForm()
  };

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
        <button type="submit" className={style.btn_register_client}>Cadastrar Cliente</button>
      </form>
    </>
  );
}