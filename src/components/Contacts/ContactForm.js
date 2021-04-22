import React, { Component } from "react";
import { connect } from "react-redux";
// import * as action from "../Redux/contacts-action";
import * as operations from "../../redux/contacts/contacts-operations";
import * as selectors from "../../redux/contacts/contacts-selectors";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { name, number } = this.state;

    if (!name || !number) {
      alert("Some field is empty");
      return;
    }
    const contacts = this.props.items;

    const isUnicContact = !!contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isUnicContact) {
      alert(`${name} is alredy in contacts.`);
      return;
    }

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            placeholder="Enter Number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: selectors.getItems(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (contact) => dispatch(operations.addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
