import React from 'react';
import Header from '../../components/compounds/header/Header.tsx';
import Footer from '../../components/compounds/footer/Footer.tsx';
import Container from '../../components/elements/container/Container.tsx';
import './Resume.css';





const AboutMe: React.FC = () => {


    return (
        <>
            <Header />


            <Container>
                <iframe src="https://docs.google.com/document/d/e/2PACX-1vT6iGm75vi1A9SEYkCs3kazqoKuU52ir8uyQLs_pcOM7j_ENrPuuhSE3momitUuAQc6j1Jd5t1aPm56/pub?embedded=true" className='iframe' scrolling="no"></iframe>
            </Container>

            <p><br/></p>
            <Footer />
        </>
    );
}

export default AboutMe;