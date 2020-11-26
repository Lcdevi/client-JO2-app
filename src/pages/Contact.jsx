import React, { Component } from 'react';
import "../styles/contact.css";
import emailjs from "emailjs-com";


// export default function Contact() {

//   function sendEmail(e) {
//     e.preventDefault();

//     emailjs.sendForm('service_ccc42rl', 'template_c0mpwaa', e.target, 'user_5YJbNYo7M4mm6EkHuui0e')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   }

//   return (
//     <form className="contact-form" onSubmit={sendEmail}>
//       <input type="hidden" name="contact_number" />
//       <label>Name</label>
//       <input type="text" name="first_name" />
//       <label>Email</label>
//       <input type="email" name="email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// }




class Contact extends Component {

  

  render() {

    function sendEmail(e) {
      e.preventDefault();

      emailjs.sendForm('service_ccc42rl', 'template_c0mpwaa', e.target, 'user_5YJbNYo7M4mm6EkHuui0e')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }


    return (
      <div id='main-contact-container'>

        <h1>CONTACTEZ-NOUS</h1>

        <div id="form-and-info-container">

          <div id="form-div">
            <form onSubmit={sendEmail}>
              
              <div id="nom-prenom">
                <div>
                  <p>nom</p>
                  <input type="text" name="last_name" id="" placeholder="nom"/>
                </div>
            
                <div>
                  <p>prénom</p>
                  <input type="text" name="first_name" id="" placeholder="prénom"/>                
                </div>
              </div>

              <p>email</p>
              <input type="email" name="email" id="" placeholder="email"/>
              
              <p>sujet</p>
              <input type="text" name="subject" id="" placeholder="sujet"/>
              
              <p>message</p>
              <textarea name="message" id="" cols="30" rows="10" placeholder="votre message ici"></textarea>
              
              <button>envoyer</button>
            
            </form>
          </div>

          <div id="contact-encart-info">
            <p>
              <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum sapiente rem unde rerum libero nobis quo inventore, reiciendis, expedita possimus hic non, quaerat neque voluptatibus? Facere impedit nemo asperiores reiciendis.</span>
            </p>
            <br/>
            <p>
              <span>Harum eligendi asperiores praesentium officia. Iure amet nisi repudiandae praesentium illo, magnam sequi ducimus expedita necessitatibus incidunt repellat adipisci labore. Iste atque quam vitae doloremque vero illo omnis, ipsam tempora.</span>
            </p>
          </div>
        </div>

      </div>
    )
  }
}

export default Contact
