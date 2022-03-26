import {initialState} from "./GlobalContext";
import Swal from 'sweetalert2'

export default function Reducer(state = initialState, action) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    switch (action.type) {
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [
                    ...state.contacts,
                ]
            };
        case 'EDIT_CONTACT':
            const editingContact = action.payload;
            const updatedContacts = state.contacts.map(contact => {
                if (contact.id === editingContact.id)
                {
                    const result = editingContact===contact
                    if(!result){
                        Toast.fire({
                            icon: 'success',
                            title: 'Updated successfully'
                        })
                        return editingContact;
                    }
                    else
                    {
                        Swal.fire('<div class="alert alert-danger" role="alert">\n' +
                            ' No changes were made!\n' +
                            '</div>')
                    }

                }
            return contact;
          });
    return {...state, contacts: updatedContacts}

        case 'REMOVE_CONTACT':
    return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== action.payload),
    }

    default:
    {
        return state;
    }
}
}
