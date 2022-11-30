import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";
import { ClientDataContext } from "../../context/clientData";

export const FormClient = () => {
  const { getClientData } = useContext(ClientDataContext);

  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    name: yup.string().required("Field Required!"),
    email: yup.string().required("Field Required!"),
    fone: yup.string().required("Field Required!"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    navigate("/dashboard");

    getClientData(data);
  };

  const onNavigate = () =>{
    navigate("/dashboard");
  }

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

        <button type="submit" className={style.btn_register_client}>Cadastrar</button>
      </form>


    </>
  );
}