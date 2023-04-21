import React from 'react';
import { FiBookmark } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';

import { theme } from '@/styles';

import SearchInput from '@/components/SearchInput';
import Select from '@/components/Select';

import { Container, Row, MarkBtn, RemoveBtn } from './styles';

const SearchFilter: React.FC = () => {
  return (
    <Container>
      <Row>
        <Select
          outlined
          options={[
            {
              label: 'Esquadras',
              value: '01'
            },
            {
              label: 'Quinas',
              value: '02'
            },
          ]}
        />
        <SearchInput placeholder='Busque o produto desejado'/>
        <MarkBtn>
          <FiBookmark color={theme.color.neutrals.darkest} fontSize={20} />
        </MarkBtn>
      </Row>
      <Row>
        <div className='col'>
          <Select
            minW='80px'
            placeholder='cor'
            options={[
              {
                label: 'Esquadras',
                value: '01'
              },
              {
                label: 'Quinas',
                value: '02'
              },
            ]}
          />
          <Select
            minW='80px'
            placeholder='Marca'
            options={[
              {
                label: 'Esquadras',
                value: '01'
              },
              {
                label: 'Quinas',
                value: '02'
              },
            ]}
          />
          <Select
            minW='80px'
            placeholder='Tamanho'
            options={[
              {
                label: 'Esquadras',
                value: '01'
              },
              {
                label: 'Quinas',
                value: '02'
              },
            ]}
          />
        </div>
        <RemoveBtn>
          <IoClose/>Remover filtros
        </RemoveBtn>
      </Row>
    </Container>
  );
}

export default SearchFilter;