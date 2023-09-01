interface SearchHistoryProps {
  searchList: string[];
  deleteSearchValue: (idx: number) => void;
}

function SearchHistory({ searchList, deleteSearchValue }: SearchHistoryProps) {
  if (searchList.length !== 0) {
    return (
      <>
        {searchList.map((searchItem, idx) => (
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
      </>
    );
  } else {
    return (
      <li
        className='flex justify-center h-full items-center
    text-sm text-gray-500 font-bold'
      >
        <span>최근 검색 내역 없음.</span>
      </li>
    );
  }
}

export default SearchHistory;
