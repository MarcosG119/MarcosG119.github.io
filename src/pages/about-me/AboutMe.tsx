import React from 'react';
import Header from '../../components/compounds/header/Header.tsx';
import Footer from '../../components/compounds/footer/Footer.tsx';
import Container from '../../components/elements/container/Container.tsx';

import FullWidthPhoto from '../../components/elements/fullWidthPhoto/FullWidthPhoto.tsx';
import LeftPhotoText from '../../components/compounds/leftPhotoText/LeftPhotoText.tsx';
import RightPhotoText from '../../components/compounds/rightPhotoText/RightPhotoText.tsx';

import HostFam from './images/host-fam.png';
import CocoBeach from './images/coconut-on-beach.jpg'
import Carnaval from './images/carnaval.jpg'



const GrowingUp: string = "\tI was born and raised in San Jose, CA where I now reside. My parents are immigrants from Mexico and that has definitely shaped me into who I am today; that goes to say early on wasn't exactly easy. My two older brothers and I had a lot of work cut out for us, the way up would be difficult. However, we never really let that stop us. I was raised to work hard and just keep on moving forward regardless of the circumstances. With that mindset I was able to take a risk and take AP classes in high school, move to Ecuador for a year with a host family, take up barbering and have a successful career cutting hair throughout college, and most recently graduate with a degree from UCLA in Mathematics.\n\n\tNever as a teenager did I think I'd be able to accomplish these feats--especially graduating from a top 20 university; yet, I did and even now I refuse to stop here. I want to keep growing and progressing no matter the challenge. My next chapter will be a career in software engineering that I hope will be starting soon. ";

const Value: string = "\tIf it isn't clear by now, I put a lot of emphasis on dedicating myself to a goal. But to me, simply being able to dedicate yourself to a goal isn't all it takes to live a good life, because many goals can be destructive. I pride myself on being able to set the right, realistic goals. These can be from improving my relationships with people (family, friends, coworkers, etc), getting better at something I can share with people (guitar, djing...), or discipling myself (religion, boxing, or brazilian jiu jitsu). I take pride that even though my life has been hard already, I continuously try to find even harder things to do so I stay sharp and humble.";






const AboutMe: React.FC = () => {


    return (
        <>
            <Header />
            <FullWidthPhoto imageUrl={HostFam} altText='Host Family'/>
            <p>That's my host family from Ecuador :^D</p>


            <Container>
            <LeftPhotoText 
                title="Growing up..."
                imageUrl={CocoBeach}
                paragraphText={GrowingUp}
            />
            </Container>


            <Container>
            <RightPhotoText 
                title="What I value..."
                imageUrl={Carnaval}
                paragraphText={Value}
            />
            </Container>

            <p><br/></p>
            <Footer />
        </>
    );
}

export default AboutMe;