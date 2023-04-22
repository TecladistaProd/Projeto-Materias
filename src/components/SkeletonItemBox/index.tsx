import React from 'react';

import { Container } from './styles';

const SkeletonItemBox: React.FC = () => {
  return (
    <Container>
      <div className="img"/>
      <div className="title"/>
      <div className="btns"/>
    </Container>
  );
}

export default SkeletonItemBox;