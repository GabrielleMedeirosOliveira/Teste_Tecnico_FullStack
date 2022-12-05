import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/client.entity"
import { AppError } from "../../errors/appError"
import { IClientUpdate } from "../../interfaces/client"


const clientUpdateService = async (id: string, data: IClientUpdate ) =>{
    const clientRepository = AppDataSource.getRepository(Client)


    const clientToUpdate = await clientRepository.findOne({where:{
        id: id
    }})

    if(clientToUpdate === null){
        throw new AppError(404, "Client not found.")
    }

    const updatedClient = {
        ...clientToUpdate,
        ...data
    }

    await clientRepository.save(updatedClient)

    return updatedClient
}

export default clientUpdateService