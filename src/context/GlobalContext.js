import React, {createContext, useReducer,useEffect} from 'react';
import Reducer from './Reducer';



export const initialState = {
    contacts: localStorage.getItem('contacts') ? JSON.parse(localStorage.getItem('contacts')):[]
};
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(Reducer, initialState);

    console.log(state.contacts)
    const {contacts} = state
    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(state.contacts));
    }, [state])

    const addContact = (contact) => {
        const updatedContact = state.contacts.push(contact)
        dispatch({
            type: "ADD_CONTACT",
            payload: {
                contacts: updatedContact
            }
        });
    }

   const editContact  = (contact) =>{
        dispatch({
            type: "EDIT_CONTACT",
            payload: contact
            // const editContact = action.payload;
            // const editContacts = state.contacts.map((contact) => {
            //     if (contact.id === editContact.id) {
            //         return editContact;
            //     }
            //     return contact;
        });
    }

   const  removeContact = (id) => {
        dispatch({
            type: "REMOVE_CONTACT",
            payload:id
        });
    }

    return (
        <GlobalContext.Provider
            value={{
                contacts,
                addContact,
                editContact,
                removeContact,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};




