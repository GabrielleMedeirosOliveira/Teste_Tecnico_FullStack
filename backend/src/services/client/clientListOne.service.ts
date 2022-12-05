import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";

const listOneClientService = async (id: string) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOne({
    where: {
      id: id,
    },
    relations: {
      contacts: true,
    },
  });

  if (!client) {
    throw new Error("Client not found!");
  }

  return client;
};

export default listOneClientService;