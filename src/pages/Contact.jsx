import React, { Component } from 'react';
import "../styles/contact.css";

class Contact extends Component {

  render() {
    return (
      <div>
        <h1>TEST</h1>
        <form>
          Nom
          <input type="text" name="" id="" placeholder="nom"/>
          Prénom
          <input type="text" name="" id="" placeholder="prénom"/>
          Email
          <input type="text" name="" id="" placeholder="email"/>
          Sujet
          <input type="text" name="" id="" placeholder="sujet"/>
          Message
          <textarea name="" id="" cols="30" rows="10" placeholder="votre message ici"></textarea>
          <button>Envoyer</button>
        </form>
      </div>
    )
  }
}

export default Contact
