// ThreeContainerRow.tsx
import React from 'react';
import Container from '../../elements/columnContainer/ColumnContainer.tsx';

interface ThreeContainerRowProps {
  containers: {
    title: string;
    subtitle: string;
    subsubtitle: string;
    description: string;
    imageUrl: string;
  }[];
}

const ThreeContainerRow: React.FC<ThreeContainerRowProps> = ({ containers }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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

export default ThreeContainerRow;