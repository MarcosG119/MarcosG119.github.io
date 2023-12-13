import React from 'react';
import Container from '../../elements/columnContainer/ColumnContainer.tsx';
import './TwoContainerRow.css'; // Import the CSS file

interface TwoContainerRowProps {
  containers: {
    title: string;
    subtitle: string;
    subsubtitle: string;
    description: string;
    imageUrl: string;
  }[];
}

const TwoContainerRow: React.FC<TwoContainerRowProps> = ({ containers }) => {
  return (
    <div className="row"> {/* Apply the 'row' class */}
      {containers.map((container, index) => (
        <Container
          key={index}
          title={container.title}
          subtitle={container.subtitle}
          subsubtitle={container.subsubtitle}
          description={container.description}
          imageUrl={container.imageUrl}
        />
      ))}
    </div>
  );
};

export default TwoContainerRow;