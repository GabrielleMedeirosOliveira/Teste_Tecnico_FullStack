import { useEffect } from "react";
import { useState } from "react";
import { ClientDataContext } from "../../context/clientData";

export const EditClients = () => {
  const { client, getOneClient, updateClient } = useContext(ClientDataContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false) 
  useEffect(() => {
    getOneClient(id);
  }, []);

  const name = useInput({
    name: "name",
    initialValue: client.name,
  });
  const email = useInput({
    name: "email",
    initialValue: client.email,
  });
  const fone = useInput({
    name: "fone",
    initialValue: client.fone,
  });
  const form = useForm({
    clearFields: true,
    formFields: [name, email, fone],
    submitCallback: (formData) => {
        updateClient(formData, id, setSuccess);
    },
  });

  return (
    <>
      <div className={style.container}>
        <h2>Editar Cliente</h2>
        <form onSubmit={form.handleSubmit}>
          <div>
            <TextField
              type="text"
              error={name.error && true}
              label="Nome"
              helperText={name.error}
              {...name.inputProps}
              style={{ width: "60%", marginTop: 20 }}
            />
            <TextField
              type="text"
              error={email.error && true}
              label="Email"
              helperText={email.error}
              {...email.inputProps}
              style={{ width: "60%", marginTop: 20 }}
            />
          </div>
          <TextField
            type="text"
            error={fone.error && true}
            label="Telefone"
            helperText={fone.error}
            {...fone.inputProps}
            style={{ width: "60%", marginTop: 20 }}
          />
          <Button
            variant="contained"
            type="submit"
            style={{ width: "60%", marginTop: 20 }}
          >
            Salvar alterações
          </Button>
          <Button
          onClick={()=>navigate("/")}
            variant="contained"
            type="submit"
            style={{ width: "60%", marginTop: 20, marginBottom: 20 }}
          >
            Voltar
          </Button>
          {
            success? (
                <p> Notícia atualizada com sucesso</p>
            ) : (
                null
            )
        }
        </form>
      </div>
    </>
  );
}