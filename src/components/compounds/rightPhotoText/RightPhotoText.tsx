// TitlePhotoText.tsx
import React from 'react';
import './PhotoText.css';
import SectionTitle from '../../elements/sectionTitle/SectionTitle.tsx';

interface TitlePhotoTextProps {
    //centered title of the section
    title: string;  

    //url of the image
    imageUrl: string;

    //text of the section
    paragraphText: string;


}

const TitlePhotoText: React.FC<TitlePhotoTextProps> = ({title, imageUrl, paragraphText}) => {


    return (
        <>
        <SectionTitle title={title} />

        <div id="row">
            <div id="column">
            <p>{paragraphText}</p>
            </div>

            <div id="column">
            <img src={imageUrl} alt="Description" />
            </div>            
        </div>
        </>
    );
};

export default TitlePhotoText;
