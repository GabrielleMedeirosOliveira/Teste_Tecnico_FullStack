import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities/contact.entity"
import { AppError } from "../../errors/appError"

const contactDeleteService = async (id: string) =>{
    const contactRepository = AppDataSource.getRepository(Contact)

    const contactToDelete = await contactRepository.findOne({where:{
        id: id
    }})

    if(!contactToDelete){
        throw new AppError(404, "Contact not found.")
    }

    await contactRepository.delete(contactToDelete);

    return "Contact Deleted!"
}

export default contactDeleteService