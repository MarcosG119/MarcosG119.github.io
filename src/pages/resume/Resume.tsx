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
                <iframe src="https://docs.google.com/document/d/e/2PACX-1vSCaLgdTBnh0xHjdy6DLx2mtY10cTLh25XMF8qmB1a7dM210O2M0ba3oa_Ak6Mt9298hQH1DiRTxHos/pub?embedded=true" className='iframe' scrolling="no"></iframe>
            </Container>

            <p><br/></p>
            <Footer />
        </>
    );
}

export default AboutMe;