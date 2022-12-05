import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities/contact.entity"
import { AppError } from "../../errors/appError"
import { IContactRequest } from "../../interfaces/contact"


const contactUpdateService = async (id: string, data: IContactRequest ) =>{
    const contactRepository = AppDataSource.getRepository(Contact)

    const contactToUpdate = await contactRepository.findOne({where:{
        id: id
    }})

    if(contactToUpdate === null){
        throw new AppError(404, "contact not found.")
    }

    const updatedContact = {
        ...contactToUpdate,
        ...data
    }

    await contactRepository.save(updatedContact)

    return updatedContact
}

export default contactUpdateService