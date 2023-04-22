import React, { useCallback, useContext, useState } from 'react';
import { FiBookmark } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { useQuery } from 'react-query';

import api from '@/services/api';

import { stringArrToOption } from '@/utils/arrManipulation';

import { theme } from '@/styles';

import SearchInput from '@/components/SearchInput';
import Select from '@/components/Select';

import { Container, Row, MarkBtn, RemoveBtn } from './styles';
import { TProductFilter } from '@/interfaces/product';
import filtersContext from '@/context/filters';

const SearchFilter: React.FC = () => {
  const [refetch, setRefetch] = useState(true);
  const {filters: data, resetFilters, handleFilters} = useContext(filtersContext);
  const { data: filters } = useQuery("filters", async () => {
    const response = await api.get<TProductFilter>("/filters");
    setRefetch(false);
    return response.data;
  }, {enabled: refetch, refetchOnMount: true});

  return (
    <Container>
      <Row>
        <Select
          outlined
          options={stringArrToOption(filters?.categoryName || [])}
          onChange={handleFilters.bind(null, 'categoryName')}
          value={data.categoryName}
        />
        <SearchInput
          value={data.search}
          onChange={handleFilters.bind(null, 'search')}
          placeholder='Busque o produto desejado'/>
        <MarkBtn>
          <FiBookmark color={theme.color.neutrals.darkest} fontSize={20} />
        </MarkBtn>
      </Row>
      <Row>
        <div className='col'>
          <Select
            minW='100px'
            placeholder='Superfície'
            options={stringArrToOption(filters?.surface || [])}
            onChange={handleFilters.bind(null, 'surface')}
            value={data.surface}
          />
          <Select
            minW='80px'
            placeholder='Marca'
            options={stringArrToOption(filters?.brand || [])}
            onChange={handleFilters.bind(null, 'brand')}
            value={data.brand}
            multiSelect
          />
          <Select
            minW='80px'
            placeholder='Tamanho'
            options={stringArrToOption(filters?.size || [])}
            onChange={handleFilters.bind(null, 'size')}
            value={data.size}
          />
        </div>
        <RemoveBtn onClick={resetFilters}>
          <IoClose/>Remover filtros
        </RemoveBtn>
      </Row>
    </Container>
  );
}

export default SearchFilter;