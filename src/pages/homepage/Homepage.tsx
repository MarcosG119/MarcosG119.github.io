import React from 'react';


import Header from '../../components/compounds/header/Header.tsx';
import Footer from '../../components/compounds/footer/Footer.tsx';
import FullWidthPhoto from '../../components/elements/fullWidthPhoto/FullWidthPhoto.tsx';
import landscape_photo from './images/homepagelandscape.jpg';

import LeftPhotoText from '../../components/compounds/leftPhotoText/LeftPhotoText.tsx';
import RightPhotoText from '../../components/compounds/rightPhotoText/RightPhotoText.tsx';
import aurelius from './images/marcus_aurelius.png';
import SF_Rooftop from './images/rooftop.jpeg';

import Container from '../../components/elements/container/Container.tsx';



const PhiloText: string = "\tI subscribe to the school of stoicism, meaning that I look for happiness in fulfilling some purpose. That purpose usually takes the form of some kind of challenge; the stress of challenging situations forces me to grow and get better not only for myself but also those around me. This is why I continuously put myself into new situations or learn new hobbies such as boxing, brazilian jiu jitsu, barbering, and even djing.\n\n\tI believe with time and consistency anything is possible. Nothing in my life has ever come easy, but there has never been anything that I couldn't overcome with time and consistency. Results may not come fast, you may even be stagnant, but if you just stay consistent over time you will surprise yourself. This has always been the case whether the challenge has been about life, fitness, education, or even in my work endeavors.";

const AboutText: string = "\tI built this website to showcase who I am and my abilities. Feel free to explore to learn about anything more specific about me. I hope by the end you see what I am capable of bringing to any team or environment. If you wish to know more feel free to contact me by any of the means available in the contact page :).";







const Homepage: React.FC = () => {


    return (
        <>
            <Header />
            <FullWidthPhoto imageUrl={landscape_photo} altText="Landscape Headshot"/>
            <Container>
                <LeftPhotoText
                    title="My Philosophy"
                    paragraphText={PhiloText}
                    imageUrl={aurelius}
                />
            </Container>
            <Container>
            <RightPhotoText
                title="About This Website"
                paragraphText={AboutText}
                imageUrl={SF_Rooftop}
            />
            </Container>

            <div><br /></div>            
            <Footer />

        </>
    );
}

export default Homepage;