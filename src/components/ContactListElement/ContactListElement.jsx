export const ContactListElement = ({contacts, deleteItem}) => {
    return (
        <>
            {contacts.map(contact => {
                return (
                    <li key={contact.id}>{contact.name}: {contact.number}
                        <button type="button" onClick={() => deleteItem(contact.id)}>Delete</button>
                    </li>
                )
            })}
        </>
    )
}