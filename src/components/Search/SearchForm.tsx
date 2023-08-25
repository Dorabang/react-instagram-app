import React from 'react';
import Input from '../Input';
import { useRecoilState } from 'recoil';
import { inputState } from '../../recoil/atoms';

interface SearchFormProps {
  addSearchValue: (value: string) => void;
}

const SearchForm = ({ addSearchValue }: SearchFormProps) => {
  const [search, setSearch] = useRecoilState(inputState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search !== '') {
      addSearchValue(search);
      setSearch('');
    }
    return;
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Input placeholder='검색' name='search' />
    </form>
  );
};

export default SearchForm;
