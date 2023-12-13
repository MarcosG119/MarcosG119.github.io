// Container.tsx
import React from 'react';
import './ColumnContainer.css';

interface ContainerProps {
  title: string;
  subtitle: string;
  subsubtitle: string;
  description: string;
  imageUrl: string;
}

const Container: React.FC<ContainerProps> = ({ title, subtitle, subsubtitle, description, imageUrl }) => {
  return (
    <div className = "containerDiv">
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <h5>{subsubtitle}</h5>
      <div className="subDiv">
        <img src={imageUrl} alt="Image" className="containerImg" />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Container;