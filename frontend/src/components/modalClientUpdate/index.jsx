import React, { useContext } from "react";
import Box from "@mui/material/Box";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import style from "./style.module.css";
import { ClientDataContext } from "../../context/clientData";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 330,
  height: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
};

export default function ClientModal({ open, handleModal, client }) {

  const {updateClient, setCanSeeClients, canSeeClients } = useContext(ClientDataContext);


  const formSchema = yup.object().shape({
    name: yup.string(),
    email: yup.string(),
    fone: yup.string(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    updateClient(client.id, data);

    setTimeout(()=>{
        handleModal(!open)
        setCanSeeClients(!canSeeClients)
    }, 1000)
  };

  return (
    <Modal open={open} onClose={handleModal}>
      <Box sx={modalStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Atualizar Cliente
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className={style.container}>
          <label className={style.inputLabel}>Nome:</label>
          <input
            type="text"
            name="name"
            {...register("name")}
            className={style.input}
            defaultValue={client.name}
          />

          <label className={style.inputLabel}>Email:</label>
          <input
            type="email"
            name="email"
            {...register("email")}
            className={style.input}
            defaultValue={client.email}
          />

          <label className={style.inputLabel}>Telefone:</label>
          <input
            type="text"
            name="fone"
            placeholder="(67)91234-5678"
            {...register("fone")}
            className={style.input}
            defaultValue={client.fone}
          />

          <button type="submit" className={style.btn_register_client}>
            Salvar
          </button>
        </form>
      </Box>
    </Modal>
  );
}