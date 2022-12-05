import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/client.entity"
import { Contact } from "../../entities/contact.entity"
import { AppError } from "../../errors/appError"
import { IContactRequest } from "../../interfaces/contact"


const contactCreateService = async (data: IContactRequest) =>{
    const contactRepository = AppDataSource.getRepository(Contact)

    const contactAlreadyExists = await contactRepository.findOne({
        where:{
            email: data.email
        }
    })


    const clientRepository = AppDataSource.getRepository(Client)

    const clientAlreadyExists = await clientRepository.findOne({
        where:{
            id: data.client_id
        }
    })

    if(contactAlreadyExists){
        throw new AppError(400, "Contact already exists")
    }

    if(!clientAlreadyExists){
        throw new AppError(404, "Client not found")
    }

    const contact = contactRepository.create({
        ...data, 
        client: clientAlreadyExists
    })

    await contactRepository.save(contact)

    return contact
}

export default contactCreateService