import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";

const listOneContactService = async (id: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contact = await contactRepository.findOne({
    where: {
      id: id,
    }
  });

  if (!contact) {
    throw new Error("Contact not found!");
  }

  return contact;
};

export default listOneContactService;