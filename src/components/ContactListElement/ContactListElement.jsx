import css from "./ContactListElement.module.css"

export const ContactListElement = ({ contacts, deleteItem }) => {
    return (
        <>
            {contacts.map(contact => {
                return (
                    <li className={css.contactListItem} key={contact.id}>{contact.name}: {contact.number}
                        <button className={css.deleteBtn} type="button" onClick={() => deleteItem(contact.id)}>Delete</button>
                    </li>
                )
            })}
        </>
    )
}