import { ContactListElement } from "components/ContactListElement/ContactListElement"

export const ContactList = ({ contacts, onClick }) => {
    return (
        <ul>
            <ContactListElement contacts={contacts} deleteItem={onClick} />
        </ul>
    )
}