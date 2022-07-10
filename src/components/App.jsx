import { Component } from "react";

import { nanoid } from 'nanoid'
import {Form} from "./Form/Form"

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: ''
  }

  onInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    })
  }

  addContact = (name, number) => {

    this.setState(({contacts}) => {
      return {
        contacts: [...contacts, {
          id: nanoid(),
          name: name,
          number: number
        }],
      }
    })
  }
  
  render() {

    const visibleContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()));

    return (
      <>
        <h1>Phonebook</h1>

        <Form addContact={this.addContact} />

        <h2>Contacts</h2>

        <label>
          Find contacts by name
          <input type="text" name="filter" value={this.state.filter} onChange={this.onInputChange} />
        </label>

        <ul>
          {visibleContacts.map(contact => {
            return (
              <li key={contact.id}>{contact.name}: {contact.number}</li>
            )
          })}
        </ul>

      </>
    )
  }

}
