import React from 'react';

import SearchFilter from '@/components/SearchFilterBox';

import { Container, ItemContainer } from './styles';
import ItemBox from '@/components/ItemBox';

const Home: React.FC = () => {

  return (
    <Container>
      <SearchFilter/>
      <ItemContainer>
        <li>
          <ItemBox></ItemBox>
        </li>
      </ItemContainer>
    </Container>
  );
}

export default Home;