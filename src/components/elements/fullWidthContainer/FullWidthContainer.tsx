// FullWidthContainer.tsx
import React from 'react';
import './FullWidthContainer.css';

interface ContainerData {
  title: string;
  description: string;
}

interface FullWidthContainerProps {
  data: ContainerData;
}

const FullWidthContainer: React.FC<FullWidthContainerProps> = ({ data }) => {
  return (
    <div className="full-width-container">
      <h3 className="centered-text">{data.title}</h3>
      <p className="left-aligned-text">{data.description}</p>
    </div>
  );
};

export default FullWidthContainer;
