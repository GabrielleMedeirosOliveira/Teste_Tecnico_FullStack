import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/client.entity"
import { AppError } from "../../errors/appError"
import { IClientRequest } from "../../interfaces/client"

const clientCreateService = async ({name, email, fone}: IClientRequest) =>{
    const clientRepository = AppDataSource.getRepository(Client)

    const clientAlreadyExists = await clientRepository.findOne({
        where:{
            email: email
        }
    })

    if(clientAlreadyExists){
        throw new AppError(400, "Client already exists")
    }

    const client = clientRepository.create({
        name,
        email,
        fone,
        createdAt: new Date()
    })

    await clientRepository.save(client)

    return client

}

export default clientCreateService