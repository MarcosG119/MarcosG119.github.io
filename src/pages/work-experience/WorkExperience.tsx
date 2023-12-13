import React from 'react';


import Header from '../../components/compounds/header/Header.tsx';
import Footer from '../../components/compounds/footer/Footer.tsx';

import FullWidthContainer from '../../components/elements/fullWidthContainer/FullWidthContainer.tsx';
import ThreeContainerRow from '../../components/compounds/threeContainerRow/ThreeContainerRow.tsx';
import TwoContainerRow from '../../components/compounds/twoContainerRow/TwoContainerRow.tsx';


const containers1 = [


    {
        title:"Delivery Driver",
        subtitle:"Pizza My Heart",
        subsubtitle:"March 2018 - Aug 2018",
        description:"I delivered pizzas, handled phone orders, and was responsible for handling all delivery cash all day. I worked very well with customers here and was often praised to management.",
        imageUrl: "https://images.getbento.com/accounts/a40d9fb88b9b4526b3c94b8d94004de7/media/images/42268pizza-my-heart-logo-lg.png.png"
    },

    {
        title:"Kitchen Staff",
        subtitle:"Chick-Fil-A",
        subsubtitle:"Sept 2017 - March 2018",
        description:"I was responsible for cooking food and preparing orders before they were given to the counter staff.",
        imageUrl: "https://pbs.twimg.com/profile_images/1148729107406041088/emlH0Rv4_400x400.png"
    },

]

const containers2 = [

    {
        title:"Astrophysics Research Intern",
        subtitle:"Foothill College",
        subsubtitle:"March 2021 - Aug 2021",
        description:"I was making a classification machine learning model using logistic regressions that determined if light data was coming from an LL Lyrae or a Quasar. I used python and sci-kit-learn in Jupyter Notebooks to analyze and report my data. The model achieved 82% accuracy.",
        imageUrl: "https://capstonevietnam-fileserver.nvcms.net/CRM/IMAGES/2018/01/foothill-college-logo.png"
    },
    {
        title:"Jamba Juice",
        subtitle:"Shift Lead",
        subsubtitle:"May 2019 - February 2021",
        description:"I lead the counter staff. I handled conflicts with customers and managed all cash during my shift. I was also in charge of making sure we had enough inventory during my shift.",
        imageUrl: "https://www.jamba.com/-/media/jamba/site-logos/jamba-logo.jpg?v=1&d=20190608T213113Z"
    },
    {
        title:"Apprentice Social Media Manager",
        subtitle:"GAD Otovalo, Ecuador",
        subsubtitle:"Aug 2018 - April 2018",
        description:"This was a gap year program called Global Citizen Year. I got an apprenticeship announcing events and getting the community involved in local events through social media. I was staying with a local host family.",
        imageUrl: "https://yt3.googleusercontent.com/4GrE31ZQAmCiLCnLjUF8di4DRsUfSX2EqPU9hOLdXkrROMUJt0IQTuSM-sQ-8t6E_ZiwsrZ3XA=s900-c-k-c0x00ffffff-no-rj"
    },

]

const containers3 = [
    
    {
        title:"Full-Stack App Developer Intern",
        subtitle:"The One Dating Club",
        subsubtitle:"August 2023 - October 2023",
        description:"The One is a pre-seed startup aiming to be a relationship platform. I was tasked with cerating  new kind of dating app using Flutter. This app would require grid-based search, matching, chat, and more. The database used for the backend  was firebase. During my time with the startup, I almost finished the app to be ready for launch. I completed the sign up process, the profile creation, matching functions, and started the search algorithm.",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/6313cbd78d907c0901365f2e/7a32ee66-2c48-403c-8046-4fea04757d05/Screen+Shot+2022-09-03+at+2.45.28+PM.png?format=1500w"
    },

    {
        title:"Machine Learning Research Intern",
        subtitle:"Logio Ltd",
        subsubtitle:"June 2022 - August 2022",
        description:"Logio is a supply chain consulting company in the Czech Republic; they are researching ways to use AI to sell more consulting services. I was tasked with improving their current ML model that predicted how many units a grocery store would sell while a product was on promotion. I contributed to improving the model by 5% to a major grocer in Prague. I mainly used R and tools in R like Dplyr, Caret, and GGplot2.",
        imageUrl: "https://i1.sndcdn.com/avatars-000628457616-00ltdm-t500x500.jpg"
    },
    {
        title:"PIC Lab Assistant",
        subtitle:"UCLA",
        subsubtitle:"September 2021 - March 2023",
        description:"I helped hundreds of students with questions about C++ and python. Primarily about data structures and algorithms. I was also in charge of troubleshooting and resolving issues regarding technology in the lab.",
        imageUrl: "https://yt3.googleusercontent.com/Ltfm6Y7CGLweR3ioqdGrtT7a5ARsh-c_sb4fyDC8DaCiYr2W1SQm9mlgnIk-nNA2G9RNU2wHqg=s900-c-k-c0x00ffffff-no-rj"
    },

]

const summaryData = {
    title: "Summary",
    description: "\tMy name is Marcos and I have a B.S. in Mathematics with a Specialization in Computing from UCLA. My technical experience comes mostly from unorthodox companies. This ended up being beneficial though because the lack of structure forced me to adapt. My internship at The One taught me how to be fast and the importance of product management; get a working product out as fast as possible and improve from there. Logio taught me how to work in a corporate environment where there is not much oversight. My experiences taught me how to be fast, how to be a self-starter, and how to be resourceful.\n\tMy time in customer service helped me a lot in those experiences, because things were so hectic I learned how to communicate briefly and thoroughly. I learned to develop relationships quickly and be of as much value to everyone around me as posisble. Especially with my math degree, I learned it is important to understand the problem as fast as possible, otherwise you might solve the wrong problem."
}


const Homepage: React.FC = () => {




    return (
        <>
            <Header />
            <FullWidthContainer data={summaryData} />
            <ThreeContainerRow containers={containers3} />
            <ThreeContainerRow containers={containers2} />
            <TwoContainerRow containers={containers1} />
            <div><br /></div>            
            <Footer />

        </>
    );
}

export default Homepage;