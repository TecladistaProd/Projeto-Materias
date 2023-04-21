import React from 'react';
import { useQuery } from 'react-query';

import api from '@/services/api';

import SearchFilter from '@/components/SearchFilterBox';
import ItemBox from '@/components/ItemBox';

import { Container, ItemContainer } from './styles';

const Home: React.FC = () => {
  const { data, isLoading, error } = useQuery("products", async () => {
    const response = await api.get("/products");
    return response.data;
  });

  console.log(data);
  
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