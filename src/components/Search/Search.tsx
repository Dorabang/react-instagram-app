import React, { useState } from 'react';
import Modal from 'components/Modal';
import SearchForm from 'components/Search/SearchForm';
import Heading from 'components/Heading';
import { getItem, setItem } from 'utils/getSessionStorage';
import SearchHistory from './SearchHistory';
import { useRecoilValue } from 'recoil';
import { inputState } from 'recoil/atoms';
import { UserProfile } from 'components/RecommendUser';
import UserList from 'constants/UserList';

const Search = () => {
  setItem('searchList', []);
  const searchListData = getItem('searchList');

  const search = useRecoilValue(inputState);
  const searchUserList = UserList.filter(
    (user) =>
      user.nickName.includes(search) || user.description?.includes(search)
  );

  const [searchList, setSearchList] = useState<string[]>(searchListData);

  const handleAllRemove = () => {
    if (window.confirm('검색 내역을 지우시겠어요?')) {
      setSearchList([]);
      sessionStorage.removeItem('searchList');
    } else {
      return;
    }
  };

  const addSearchValue = (value: string) => {
    const newSearchList: string[] = [...searchList, value];
    setSearchList(newSearchList);
    setItem('searchList', newSearchList);
  };

  const deleteSearchValue = (idx: number) => {
    const modifySearchList: string[] = searchList.filter(
      (_, index) => index !== idx
    );
    setSearchList(modifySearchList);
    setItem('searchList', modifySearchList);
  };

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
        border-gray-200
        flex
        flex-col
        shadow-[4px_0_24px_rgba(0,0,0,0.15)]
        '
      >
        <div className='border-b border-gray-200'>
          <Heading title='검색' />
          <div className='mb-6 px-4'>
            <SearchForm addSearchValue={addSearchValue} />
          </div>
        </div>
        <div className='w-[396px] pt-2 h-full'>
          {!search && (
            <div className='font-bold px-6 py-2 flex justify-between w-full'>
              <p>최근 검색 항목</p>
              <div
                className={`${
                  searchList.length === 0 || searchList === null
                    ? 'hidden'
                    : 'block'
                }`}
                onClick={handleAllRemove}
              >
                <span className='text-cyan-500 hover:text-cyan-800 cursor-pointer'>
                  모두 지우기
                </span>
              </div>
            </div>
          )}

          <ul className='w-full h-full overflow-y-scroll scrollbar-hide'>
            {search ? (
              <>
                {searchUserList.map((user) => (
                  <li className='px-6 py-2 hover:bg-gray-100 transition-colors cursor-pointer'>
                    <UserProfile user={user} type='SearchUser' value='' />
                  </li>
                ))}
              </>
            ) : (
              <SearchHistory
                searchList={searchList}
                deleteSearchValue={deleteSearchValue}
              />
            )}
          </ul>
        </div>
      </div>
    </Modal>
  );
};

export default Search;
