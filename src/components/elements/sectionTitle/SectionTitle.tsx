import React from 'react';
import './SectionTitle.css';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <h1 className='h1-SectionTitle'>
      {title}
    </h1>
  );
};

export default SectionTitle;