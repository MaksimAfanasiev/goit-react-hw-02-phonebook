import PropTypes from "prop-types"
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

ContactListElement.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
    })),
    deleteItem: PropTypes.func,
}