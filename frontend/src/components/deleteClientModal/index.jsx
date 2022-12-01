import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useContext } from "react";
import { ClientDataContext } from "../../context/clientData";

export function DeleteClientModal({id}) {

  const {deleteClient, canSeeClients, setCanSeeClients} = useContext(ClientDataContext)

  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleModal = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button
        variant="standard"
        sx={{ color: "red", fontSize: 16 }}
        onClick={handleModal}
      >
        Excluir
      </Button>
      <Dialog
        open={open}
        onClose={handleModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {
          success ? (
            <>
            <DialogTitle
          id="alert-dialog-title"
          sx={{ backgroundColor: "white", color: "black" }}
          >
          {"Cliente/Contato excluido com sucesso!"}
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: "white" }}>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ color: "black" }}
          >
           Cliente/Contato excluido com sucesso!
          </DialogContentText>
        </DialogContent>
          </>
          )
           : 
           (
            <>
                <DialogTitle
              id="alert-dialog-title"
              sx={{ backgroundColor: "white", color: "black" }}
            >
              {"Você quer excluir este cliente/contato?"}
            </DialogTitle>
            <DialogContent sx={{ backgroundColor: "white" }}>
              <DialogContentText
                id="alert-dialog-description"
                sx={{ color: "black" }}
                >
                Excluindo esta pessoa, ele ficará no sistema, mas DESATIVADO!
              </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ backgroundColor: "white" }}>
              <Button
                onClick={() =>{
                    deleteClient(id, setSuccess)
                    setTimeout(()=>{
                        setCanSeeClients(!canSeeClients)
                    }, 1000)

                }}
                sx={{
                  "&:hover": {
                    background: "red",
                    color: "white",
                  },
                }}
                >
                Excluir
              </Button>
              <Button
                onClick={handleModal}
                sx={{ "&:hover": { background: "blue", color: "white" } }}
                >
                Voltar
              </Button>
            </DialogActions>
            </>
           )
        }

      </Dialog>
    </div>
  );
}