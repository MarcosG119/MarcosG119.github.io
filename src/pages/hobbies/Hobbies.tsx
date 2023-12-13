import React from 'react';
import Header from '../../components/compounds/header/Header.tsx';
import Footer from '../../components/compounds/footer/Footer.tsx';
import Container from '../../components/elements/container/Container.tsx';


import FullWidthPhoto from '../../components/elements/fullWidthPhoto/FullWidthPhoto.tsx';
import LeftPhotoText from '../../components/compounds/leftPhotoText/LeftPhotoText.tsx';


import Amazon from './images/amazon.jpg';
import BoxingRing from './images/boxing-ring.png';
import Dumbells from './images/Squat-Rack-small.jpg';
import Guitar from './images/guitar.jpg';
import BJJ from './images/bjj.jpg';
import DJ from './images/dj.jpeg';
import Golf from './images/golf.jpg';

const LiftingText: string = "\tI started lifting earlier than this in High School as a part of Football. It was not until 2019 that I started picking it up for myself. Initially it started as a way to try to look better, as I think it does for most people. That mindset however, made it hard to stay consistent. I eventually came to love lifting for the progress and that it improves my health; this also allowed me to be more consistent which I didn't achieve until around 2021. Nothing is more important than health and lifting taught me to care more for myself as well as to be more patient. Patience is required to see results–no matter the domain.";

const GuitarText: string = "\tI started playing guitar to pursue my passion for music. I've always been in awe of people who are musically talented. I decided I should start learning for myself even though I was already too old to become a prodigy. I started by teaching myself Feeling Whitney by Post Malone. Learning guitar hurts, but it taught me to be more attentive. By simply being more present, the results increased tenfold.";

const BoxingText: string = "\tI started boxing because even though I was really active in lifting, I was still pretty out of shape. I found this to be the most engaging way to get cardio in. It was difficult at first, but with time I slowly improved. It also boosted my confidence because quite simply, nothing hurts as much as getting punched in the face.";

const BJJText: string = "\tWhen I started back at school for my senior year, there were no boxing gyms near by; all the training was done on my own. What my school did offer, though, was Brazilian Jiu Jitsu. I had never done anything grappling like this besides football. What I enjoy most about Brazilian Jiu Jitsu is that it offers me a chance to combine cardio, strength, and intellect. It is a lot slower than boxing so it requires more thinking about how to get in and out of positions. Most importantly, when in a really bad situation Brazilian Jiu Jitsu taught me how to breathe.";

const DJText: string = "\tAs I stated before, I have a large passion for music. Djing allows me to be really personal when I am playing music for other people. It is how you tell a story through the music that you play that matters. This is something I have really come to love. I primarily play hip hop, rnb, and house music. If you want to listen to some of my mixes you can find them here: https://soundcloud.com/mrkyg.";

const GolfText: string = "\tTough. Just keep on swinging man.";

const Hobbies: React.FC = () => {


    return (
        <>
            <Header />
            <FullWidthPhoto imageUrl={Amazon} altText='Landscape Image'/>
            
            
            
            
            {
                //Lifting component
            }
            <Container>
            <LeftPhotoText 
                title="Lifting"
                subtitle="Since 2019"
                imageUrl={Dumbells}
                paragraphText={LiftingText}
            />            
            </Container>



            {
                //Guitar component
            }
            <Container>
            <LeftPhotoText 
                title="Guitar"
                subtitle="Since 2021"
                imageUrl={Guitar}
                paragraphText={GuitarText}
            />
            </Container>



            {               
                //Boxing component
            }
            <Container>
            <LeftPhotoText 
                title="Boxing"
                subtitle="Since 2022"
                imageUrl={BoxingRing}
                paragraphText={BoxingText}
            />
            </Container>

            {               
                //BJJ component
            }
            <Container>
            <LeftPhotoText 
                title="BJJ"
                subtitle="Since 2022"
                imageUrl={BJJ}
                paragraphText={BJJText}
            />
            </Container>



            {               
                //DJ component
            }
            <Container>
            <LeftPhotoText 
                title="DJing"
                subtitle="Since 2022"
                imageUrl={DJ}
                paragraphText={DJText}
            />
            </Container>

            {               
                //Golf component
            }
            <Container>
            <LeftPhotoText 
                title="Golf"
                subtitle="Since 2023"
                imageUrl={Golf}
                paragraphText={GolfText}
            />
            </Container>

            <div><p><br></br></p></div>


            <Footer />
        </>
    );
}

export default Hobbies;