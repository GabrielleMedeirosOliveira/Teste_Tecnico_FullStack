import { useContext } from "react";
import { ContainerRegisterClient } from "../../components/ContainerRegisterClient"
import { ContainerRegisterContact } from "../../components/ContainerRegisterContact"
import { ContactDataContext } from "../../context/contactData";


export const Homepage = () =>{

  const { navigate } = useContext(ContactDataContext);

    return (
        <>
            {
                navigate ?
                (
                    <ContainerRegisterContact/>

                ):
                (
                    <ContainerRegisterClient/>
                )

            }
        </>


    )
}