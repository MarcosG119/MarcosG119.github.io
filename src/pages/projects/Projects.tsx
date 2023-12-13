import React from 'react';
import './Projects.css';


import Header from '../../components/compounds/header/Header.tsx';
import Footer from '../../components/compounds/footer/Footer.tsx';
import {Link} from "react-router-dom";

import RowContainer from '../../components/elements/row/Row.tsx';
import Container from '../../components/elements/container/Container.tsx';
import Button from '../../components/elements/button/Button.tsx';

import WebScreenShot from './images/website-screenshot.png';




const Homepage: React.FC = () => {

    return (
        <>
            <Header />

                <RowContainer>


                    <div className='div'>
                    <Container>
                        <h3>Personal Website</h3>
                        <img src={WebScreenShot} alt="Screenshot of homepage"></img>
                        <p>This is a personal website that was built on React and Node. It displays my projects on this page, work experience, and a few more personal things to get to know me better. There is also a contact page where you can contact me from that was built with node. </p>
                        <RowContainer>
                            <Button><Link to="https://github.com/MarcosG119/marcosg119.github.io">Github</Link></Button>
                            <Button><Link to="/">Use</Link></Button>
                        </RowContainer>
                    </Container>
                    </div>


                    <div className='div'>
                    <Container>
                        <h3>Personal Website</h3>
                        <img src={WebScreenShot} alt="Screenshot of homepage"></img>
                        <p>This is a personal website that was built on React and Node. It displays my projects on this page, work experience, and a few more personal things to get to know me better. There is also a contact page where you can contact me from that was built with node. </p>
                        <RowContainer>
                            <Button><Link to="https://github.com/MarcosG119/marcosg119.github.io">Github</Link></Button>
                            <Button><Link to="/">Use</Link></Button>
                        </RowContainer>
                    </Container>
                    </div>


                    <div className='div'>
                    <Container>
                        <h3>Personal Website</h3>
                        <img src={WebScreenShot} alt="Screenshot of homepage"></img>
                        <p>This is a personal website that was built on React and Node. It displays my projects on this page, work experience, and a few more personal things to get to know me better. There is also a contact page where you can contact me from that was built with node. </p>
                        <RowContainer>
                            <Button><Link to="https://github.com/MarcosG119/marcosg119.github.io">Github</Link></Button>
                            <Button><Link to="/">Use</Link></Button>
                        </RowContainer>
                    </Container>
                    </div>

                </RowContainer>

            <Footer />

        </>
    );
}

export default Homepage;