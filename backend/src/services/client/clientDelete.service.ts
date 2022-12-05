import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/client.entity"
import { AppError } from "../../errors/appError"

const clientDeleteService = async (id: string) =>{
    const clientRepository = AppDataSource.getRepository(Client)

    const clientToDelete = await clientRepository.findOne({where:{
        id: id
    }})

    if(!clientToDelete){
        throw new AppError(404, "Client not found.")
    }

    clientToDelete.isActive = false

    await clientRepository.save(clientToDelete)

    return "Client desactivated!"
}

export default clientDeleteService