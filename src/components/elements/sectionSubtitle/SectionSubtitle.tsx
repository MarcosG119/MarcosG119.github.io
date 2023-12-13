import React from 'react';
import './SectionSubtitle.css';

interface SectionSubtitleProps {
  subtitle?: string;
}

const SectionSubtitle: React.FC<SectionSubtitleProps> = ({ subtitle }) => {
  return (
    <h3 className='h3-sectionSubtitle'>
      {subtitle}
    </h3>
  );
};

export default SectionSubtitle;