// HeadImageComponent.tsx
import './FullWidthPhoto.css';
import React from 'react';

interface FullWidthPhotoProps {
  imageUrl: string;
  altText: string;
}

const FullWidthPhoto: React.FC<FullWidthPhotoProps> = ({ imageUrl, altText }) => {

  return (
    <div id="full-width-photo">
      <img src={imageUrl} alt={altText} />
    </div>
  );
};

export default FullWidthPhoto;