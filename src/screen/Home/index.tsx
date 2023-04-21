import React from 'react';
import { useQuery } from 'react-query';

import api from '@/services/api';

import { IProduct } from '@/interfaces/product';

import SearchFilter from '@/components/SearchFilterBox';
import ItemBox from '@/components/ItemBox';

import { Container, ItemContainer } from './styles';

const Home: React.FC = () => {
  const { data } = useQuery("products", async () => {
    const response = await api.get<IProduct[]>("/products");
    return response.data;
  });
  
  return (
    <Container>
      <SearchFilter/>
      <ItemContainer>
        {
          data?.map(i => (
            <li key={i.id}>
              <ItemBox {...i}/>
            </li>
          ))
        }
      </ItemContainer>
    </Container>
  );
}

export default Home;