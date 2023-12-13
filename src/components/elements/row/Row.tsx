import React from 'react';
import './Row.css'; 

interface RowContainerProps {
  children: React.ReactNode;
}

const RowContainer: React.FC<RowContainerProps> = ({ children }) => {
  return <div className="row-container">{children}</div>;
};

export default RowContainer;
