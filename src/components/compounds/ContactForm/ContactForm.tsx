import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './ContactForm.css'


const ContactForm = () => {

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const currentForm = form.current;
      if(!currentForm) return;

      const nameInput = currentForm.querySelector('input[name="userName"]') as HTMLInputElement;
      const emailInput = currentForm.querySelector('input[name="userEmail"]') as HTMLInputElement;
      const messageInput = currentForm.querySelector('textarea[name="userMessage"]') as HTMLTextAreaElement;
    
      if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
        alert('Please fill out the required fields: Name, Email, and Message');
        return;
      }

  

      //thank you email
      emailjs.sendForm('service_p8tgcj9', 'template_71w1r3g', currentForm, 'iLD4UH4G9Rf-Sb-Sj')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });


      //personal email
      emailjs.sendForm('service_p8tgcj9', 'template_gcvkbso', currentForm, 'iLD4UH4G9Rf-Sb-Sj')
      .then((result) => {
          alert("Your message has been sent! I will get back to you soon!")
          console.log(result.text);
      }, (error) => {
          alert("Try again!");
          console.log(error.text);
      });


      currentForm.reset();
    };


    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>
                Name: *
                <br/>
                <input type="text" name="userName" />
            </label>
            <br />
            <label>
                Email: *<br/>
                <input type="email" name="userEmail" />
            </label>
            <br />
            <label>
                Phone Number: <br />
                <input type="tel" name="userNumber" />
            </label>
            <br />
            <label>
                Message: *<br />
                <textarea name="userMessage" />
            </label>
            <br />

            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;