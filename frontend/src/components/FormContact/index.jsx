import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext, useEffect, useState } from "react";
import { ContactDataContext } from "../../context/contactData";
import style from "./style.module.css";
import { ClientDataContext } from "../../context/clientData";

export const FormContact = () => {
  const { getContactData } = useContext(ContactDataContext);
  const { getAllClients, clients } = useContext(ClientDataContext);
  const formSchema = yup.object().shape({
    name: yup.string().required("Field Required!"),
    email: yup.string().required("Field Required!"),
    fone: yup.string().required("Field Required!"),
    client_id: yup.string().required("Field Required!"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    getContactData(data);
  };

  const handleNavigation = () =>{}

  useEffect(() => {

    getAllClients()

  // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={style.container}>
        <label className={style.inputLabel}>Nome:</label>
        <input type="text" name="name" {...register("name")} className={style.input} />
        <label className={style.inputLabel}>Email:</label>
        <input type="email" name="email" {...register("email")} className={style.input} />
        <label className={style.inputLabel}>Telefone:</label>
        <input
          type="text"
          name="fone"
          placeholder="(67)91234-5678"
          {...register("fone")}
          className={style.input}
        />
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
        <button type="submit" className={style.btn_register_contact}>Cadastrar</button>
      </form>
    </>
  );
};