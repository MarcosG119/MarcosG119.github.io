import React from 'react';
import Header from '../../components/compounds/header/Header.tsx';
import Footer from '../../components/compounds/footer/Footer.tsx';
import Container from '../../components/elements/container/Container.tsx';
import ContactForm from '../../components/compounds/ContactForm/ContactForm.tsx';

import './ContactMe.css';




const AboutMe: React.FC = () => {


    return (
        <>
            <Header />


            <Container>
                <h3>Contact Me Below!<br></br></h3>
                
                <p>I will get back to you as soon as I can! This will send a notification to my email with your message and all your information. You will also receive an email with everything you've sent! I hope you've got to enjoy my website and see everything I've put into it!</p>
                <ContactForm />


            </Container>

            <p><br/></p>
            <Footer />
        </>
    );
}

export default AboutMe;