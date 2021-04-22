import React, { Component } from "react";

import ContactForm from "../Contacts/ContactForm";
import Filter from "../Contacts/Filter";
import ContactList from "../Contacts/ContactList";

import { connect } from "react-redux";
import * as operations from "../../redux/contacts/contacts-operations";
import * as selectors from "../../redux/contacts/contacts-selectors";

class Contacts extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
        {this.props.isLoading && <h2>Loading...</h2>}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: selectors.getLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(operations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
