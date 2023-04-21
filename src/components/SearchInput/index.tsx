import React, { useCallback } from 'react';
import { TbCommand } from 'react-icons/tb';
import { FiSearch } from 'react-icons/fi';

import { Container, Btn, Input } from './styles';

interface IProps {
  value?: string;
  placeholder?: string;
  onChange?: (str: string) => void;
}

const SearchInput: React.FC<IProps> = ({ onChange, ...rest }) => {
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value || '');
  }, [onChange]);

  return (
    <Container>
      <Btn isSearch>
        <FiSearch fontSize={16}/>
      </Btn>
      <Input onChange={handleChange} {...rest}/>
      <Btn><TbCommand/></Btn>
      <Btn>k</Btn>
    </Container>
  );
}

export default SearchInput;