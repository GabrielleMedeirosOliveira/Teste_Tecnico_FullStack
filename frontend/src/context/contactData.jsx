import { createContext, useState} from "react";
import { api } from "../server/api";

export const ContactDataContext = createContext();

export const ContactDataProvider = ({children}) =>{

    const [contactsData, setContactsData] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [navigate, setNavigate] = useState(false);

    const getContactData = (data) =>{
        api.post("/contacts", data)
        .then(res => setContactsData([...contactsData, res.data]))
    }

    const getAllContacts = () =>{
        api.get("/contacts")
        .then(res => setContacts(res.data))
    }

    const handleNavigation = () =>{
        setNavigate(!navigate)
    }

    return(
        <ContactDataContext.Provider value={{getContactData, contactsData, getAllContacts, contacts, navigate, handleNavigation}}>
            {children}
        </ContactDataContext.Provider>
    )

}