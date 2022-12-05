import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/client.entity"
import { ErrorHandler } from "../../errors/appError"
import { IClientUpdate } from "../../interfaces/client"


const clientUpdateService = async (id: string, data: IClientUpdate ) =>{
    const clientRepository = AppDataSource.getRepository(Client)

    console.log(clientRepository)

    const clientToUpdate = await clientRepository.findOne({where:{
        id: id
    }})

    if(clientToUpdate === null){
        throw new ErrorHandler(404, "Client not found.")
    }

    const updatedUser = {
        ...clientToUpdate,
        ...data
    }

    await clientRepository.save(updatedUser)

    return updatedUser
}

export default clientUpdateService