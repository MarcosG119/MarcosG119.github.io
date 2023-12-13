// TitlePhotoText.tsx
import React from 'react';
import './PhotoText.css';
import SectionTitle from '../../elements/sectionTitle/SectionTitle.tsx';
import SectionSubtitle from '../../elements/sectionSubtitle/SectionSubtitle.tsx';

interface TitlePhotoTextProps {
    //centered title of the section
    title: string;  

    subtitle?: string;

    //url of the image
    imageUrl: string;

    //text of the section
    paragraphText: string;


}

const TitlePhotoText: React.FC<TitlePhotoTextProps> = ({title, subtitle, imageUrl, paragraphText}) => {

    return (
        <>
        <SectionTitle title={title} />
        <SectionSubtitle subtitle={subtitle}/>

        <div id="row">
            <div id="column">
            <img src={imageUrl} alt="Description" />
            </div>
            <div id="column">
            <p>{paragraphText}</p>
            </div>
        </div>
        </>
    );
};

export default TitlePhotoText;
