import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_lk2hcmr', // Vervang dit met jouw EmailJS-service-ID
                'template_2sxd2a2', // Vervang dit met jouw EmailJS-template-ID
                form.current,
                '0llyZRp02AZ6kQRc_' // Vervang dit met jouw EmailJS-user-ID
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Message sent successfully!");
                },
                (error) => {
                    console.log(error.text);
                    alert("Failed to send message, please try again.");
                }
            );

        e.target.reset(); // Reset het formulier na het verzenden
    };

    return (
        <section className="contact container section" id="contact">
            <h2 className="section__title">Get In Touch</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Let's talk about things!</h3>
                    <p className="contact__details">Hier iets met contact details</p>
                </div>

                <form ref={form} onSubmit={sendEmail} className="contact__form">
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input type="text" name="user_name" className="contact__form-input" placeholder="Insert your name" required />
                        </div>

                        <div className="contact__form-div">
                            <input type="email" name="user_email" className="contact__form-input" placeholder="Insert your email" required />
                        </div>
                    </div>
                    
                    <div className="contact__form-div">
                        <input type="text" name="subject" className="contact__form-input" placeholder="Insert your subject" required />
                    </div>
                    
                    <div className="contact__form-div contact__form-area">
                        <textarea name="message" cols="30" rows="10" className="contact__form-input" placeholder="Write your message" required></textarea>
                    </div>

                    <button type="submit" className="btn">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
