import React from "react";
import { useForm } from "react-cool-form";
import { useState } from "react";
import "../../style.css";

function Enroll(props) {

    const [showMessage, setShowMessage] = useState(true);
   

  const { form, getState } = useForm({
    defaultValues: { name: "", email: "", password: "" },
    onSubmit: (values) =>{ 
                 setShowMessage(false)
                 fetch("http://localhost:3000/api/send_registration_email", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ values })
                          }).then(response => response.json());

},
        

  });

  const sendChatBotlink = (email, userName = "Atos Syntel HR Team") =>{
  
        console.log('sendEmail', email)
        return fetch("/api/send_email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, link:"https://3000/chatbot"+ "/"+userName })
        }).then(response => response.json());

  }

  const errors = getState("errors");
  return (
    <div class="container" style={{ height: 640 }}>
      {showMessage ? (
        <form ref={form} noValidate>
          <h3>
            <span className="formName"></span>Registration Form
          </h3>
          <div>
            <input name="name" placeholder="Name" required />
            {errors.name && <p>{errors.name}</p>}
          </div>

          <div>
            <input name="email" type="email" placeholder="Email" required />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div>
            <input
              name="contactno"
              type="contactno"
              placeholder="Contact No"
              pattern="[0-9]*"
              required
              minLength={10}
            />
            {errors.contactno && <p>{errors.contactno}</p>}
          </div>

          <input type="submit" />
          <input type="reset" />
        </form>
      ) : (
        <div className="successMessage" style={{ width: 700}}>
          Thank you for registering with us. Please check your email for further
          information.
        </div>
      )}
    </div>
  );
}

export default Enroll;
