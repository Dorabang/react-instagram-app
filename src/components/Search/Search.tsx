import UserList from '../../constants/UserList';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Modal from '../Modal';
import SearchForm from './SearchForm';
import Heading from '../Heading';
import { useRecoilValue } from 'recoil';
import { inputState } from '../../recoil/atoms';
import { getItem, setItem } from '../../utils/getSessionStorage';

const Search = () => {
  const value = useRecoilValue(inputState);
  const searchListData = getItem('searchList');
  const [searchList, setSearchList] = useState<string[]>(searchListData);

  const handleAllRemove = () => {
    setSearchList([]);
    setItem('searchList', []);
  };

  const addSearchValue = (value: string) => {
    const newSearchList: string[] = [...searchList, value];
    setSearchList(newSearchList);
    setItem('searchList', newSearchList);
  };

  const deleteSearchValue = (idx: number) => {
    const newSearchList: string[] = searchList.filter(
      (_, index) => index !== idx
    );
    setSearchList(newSearchList);
    setItem('searchList', newSearchList);
  };

  useEffect(() => {}, []);

  const query = useSearchParams();

  // console.log('query', query);

  if (value) {
    const user = UserList.find((item) => item.nickName === value);
  }

  return (
    <Modal>
      <div
        className='
        absolute
        left-[72px]
        rounded-r-2xl
        top-0
        z-0
        h-screen
        py-2
        border-r
        border-gray-300
        flex
        flex-col
        shadow-[4px_0_24px_rgba(0,0,0,0.15)]
        '
      >
        <div className='border-b border-gray-300'>
          <Heading title='검색' />
          <div className='mb-6 px-4'>
            <SearchForm addSearchValue={addSearchValue} />
          </div>
        </div>
        <div className='w-[396px] pt-2 overflow-y-scroll'>
          <div className='font-bold px-6 py-2 flex justify-between'>
            <p>최근 검색 항목</p>
            <div
              className={`${searchList.length === 0 ? 'hidden' : 'block'}`}
              onClick={handleAllRemove}
            >
              <span className='text-cyan-500 hover:text-cyan-800 cursor-pointer'>
                모두 지우기
              </span>
            </div>
          </div>
          <ul className='py-2'>
            {searchList &&
              searchList.map((searchItem, idx) => (
                <li
                  key={idx}
                  className='flex items-center px-6 py-2 hover:bg-gray-100 transition-colors cursor-pointer'
                >
                  <span
                    className='
                    border border-gray-200 rounded-full
                    w-[44px] h-[44px] mr-2
                    flex justify-center items-center
                    text-2xl ont-bold leading-none
                  '
                  >
                    #
                  </span>
                  <span className='font-bold flex-grow'>#{searchItem}</span>
                  <span onClick={() => deleteSearchValue(idx)}>x</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </Modal>
  );
};

export default Search;
