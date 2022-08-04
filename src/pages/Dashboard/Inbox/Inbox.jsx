// import React from 'react';
import React, { useRef } from 'react';


import emailjs from 'emailjs-com';
// import emailjs from '@emailjs/browser';
const Inbox = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_49cp8gn', form.current, '6eU1zSupxuxJXH3Qt')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div>
            {/* <h1 className='text-5xl font-bold text-center'> Inbox </h1> */}
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    );
};

export default Inbox;