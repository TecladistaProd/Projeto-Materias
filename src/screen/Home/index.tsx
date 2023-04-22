import React, { useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import { useDebouncedEffect } from '@react-hookz/web';
import qs from 'qs';

import api from '@/services/api';

import useEventBus from '@/hooks/useEventBus';

import { IFiltersContext } from '@/interfaces/filtersContext';
import { IProduct } from '@/interfaces/product';

import Filters from '@/Model/Filters';

import filtersContext from '@/context/filters';

import SearchFilter from '@/components/SearchFilterBox';
import ItemBox from '@/components/ItemBox';

import { Container, ItemContainer } from './styles';
import SkeletonItemBox from '@/components/SkeletonItemBox';

const Home: React.FC = () => {
  const [refetch, setRefetch] = useState(true);
  const [filters, setFilters] = useState(new Filters());
  const { data, isLoading } = useQuery("products", async () => {
    const response = await api.get<IProduct[]>("/products", {
      params: JSON.parse(JSON.stringify(filters)),
      paramsSerializer: params => {
        for(const i in params)
          if(!params[i])
            delete params[i]
        return qs.stringify(params)
      }
    });
    setRefetch(false);
    return response.data;
  }, { enabled: refetch });
  const eventBus = useEventBus();

  useDebouncedEffect(() => {
    setRefetch(true);
  }, [filters], 700);

  useDebouncedEffect(() => {
    const onQueryProducts = () => setRefetch(true);
    eventBus.addEventListener('onQueryProducts', onQueryProducts)
  }, [eventBus], 700);

  const handleFilters = useCallback<IFiltersContext['handleFilters']>((key, str) => {
    const data = {} as Record<typeof key, typeof str>;
    data[key] = str
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setFilters(val => ({...val, ...data }));
  }, []);

  const resetFilters = useCallback<IFiltersContext['resetFilters']>(() => {
    setFilters(new Filters());
  }, []);
  
  return (
    <Container>
      <filtersContext.Provider value={{
        filters,
        handleFilters,
        resetFilters
      }}>
        <SearchFilter/>
      </filtersContext.Provider>
      <ItemContainer>
        {
          isLoading ? Array(10).fill(0).map((_, k) => (
            <li key={k}>
              <SkeletonItemBox />
            </li>
          )) : data?.map(i => (
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