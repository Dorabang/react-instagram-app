import { UserProfile } from 'components/RecommendUser';
import UserList from 'constants/UserList';
import React from 'react';
import getCurrentUser from 'utils/getUserInfo';

const PeoplePage = () => {
  const currentUser = getCurrentUser();

  /* 현재 로그인한 사용자 및 사용자가 팔로우한 이용자 제외 리스트 리턴 */
  const recommendList =
    currentUser &&
    UserList.filter(
      (item) =>
        item.email !== currentUser.email &&
        !currentUser.followers.includes(item.nickName)
    );

  return (
    <div className='max-w-[600px] w-full py-[10px] sm:py-[60px]'>
      <ul>
        <li className='flex px-4 py-2'>
          <span className='font-bold flex-grow'>추천</span>
        </li>
        {recommendList &&
          recommendList.map((user, idx) => (
            <li key={idx}>
              <UserProfile
                user={user}
                value='팔로우'
                variant='contained'
                size='sm'
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PeoplePage;
