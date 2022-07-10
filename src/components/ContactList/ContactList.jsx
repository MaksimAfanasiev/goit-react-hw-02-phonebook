import { ContactListElement } from "components/ContactListElement/ContactListElement"
import css from "./ContactList.module.css"

export const ContactList = ({ contacts, onClick }) => {
    return (
        <ul className={css.contactList}>
            <ContactListElement contacts={contacts} deleteItem={onClick} />
        </ul>
    )
}