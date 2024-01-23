import React from 'react';
import './Projects.css';


import Header from '../../components/compounds/header/Header.tsx';
import Footer from '../../components/compounds/footer/Footer.tsx';
import {Link} from "react-router-dom";

import RowContainer from '../../components/elements/row/Row.tsx';
import Container from '../../components/elements/container/Container.tsx';
import Button from '../../components/elements/button/Button.tsx';

import WebScreenShot from './images/website-screenshot.png';
import PlantPapaScreenshot from './images/plant-papa-screenshot.png';
import PenguinsScreenshot from './images/penguins-project.png';



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
                        <h3>Plant Papa</h3>
                        <img src={PlantPapaScreenshot} alt="Screenshot of login"></img>
                        <p>I built this webapp to help me manage plants I wanted to care for. You can create notes and track the date last watered for any plant in the Trefle API database. The information is stored using google firestore and the backend is built using node and express. You can also identify plants using the Plantnet Plant Classification API. The backend must be ran through a local server because you have to pay to use third party API with google. Authentication still works however because it is using Firebase authentication.</p>
                        <RowContainer>
                            <Button><Link to="https://github.com/MarcosG119/Plant-Papa">Github</Link></Button>
                            <Button><Link to="https://plant-papa.web.app/login">Use</Link></Button>
                        </RowContainer>
                    </Container>
                    </div>


                    <div className='div'>
                    <Container>
                        <h3>Penguins Classification</h3>
                        <img src={PenguinsScreenshot} alt="Screenshot of homepage"></img>
                        <p>This is a final project that I did for my Machine Learning in Python class. The goal was to analyze data on different species of penguins and find which factors made them most differentiable. This required using Seaborn and matplotlib as well as sci-kit-learn. I also used pandas for soem of the analysis and data cleaning.</p>
                        <RowContainer>
                            <Button><Link to="https://drive.google.com/file/d/1fQtlxItqpaydJYUBzCoTaP37PXuvqLiB/view?usp=sharing">Google Drive Pdf</Link></Button>
                        </RowContainer>
                    </Container>
                    </div>

                </RowContainer>

            <Footer />

        </>
    );
}

export default Homepage;