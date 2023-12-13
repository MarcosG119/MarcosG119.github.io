import React, {ReactNode} from 'react';
import './Container.css';

interface ContainerProps {
    children?: ReactNode;
}

const Container: React.FC<ContainerProps> = ({children}) => {
  return (
    <div className="container">
        {children && <div>{children}</div>}
    </div>
  );
};

export default Container;