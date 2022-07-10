import { Component } from "react";

export class Form extends Component {

    state = {
        name: '',
        number: ''
    }

    onInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
        [name]: value,
        })
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        
        this.props.addContact(this.state.name, this.state.number);

        this.setState({
            name: '',
            number: ''
        })
    }

    render() {
        return (
        <form onSubmit={this.onFormSubmit}>

          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.onInputChange}
            />
          </label>

          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.onInputChange}
            />
          </label>

          <button type="submit">Add contact</button>

        </form>
        )
    }
}