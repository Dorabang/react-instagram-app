import React from 'react';
import getCurrentUser from 'utils/getUserInfo';
import ProfileIcon from './ProfileIcon';
import UserList, { UserListProps } from 'constants/UserList';

const Button = ({ value }: { value: string }) => {
  return (
    <div className='cursor-pointer text-sky-500 text-xs font-bold'>{value}</div>
  );
};

const UserProfile = ({
  user,
  type,
}: {
  user: UserListProps;
  type?: string;
}) => {
  return (
    <div className='flex items-center px-4 py-[10px]'>
      <ProfileIcon
        size={true}
        profile={user?.imageSrc}
        userName={user?.userName}
      />
      <div className='flex-grow pl-2 text-sm'>
        <p className='font-bold'>{user?.nickName}</p>
        <p className='text-gray-500 text-xs'>
          {type === 'currentUser'
            ? user?.userName
            : user.description?.substring(0, 20)}
        </p>
      </div>
      <Button value={type === 'currentUser' ? '전환' : '팔로우'} />
    </div>
  );
};

const RecommendUser = () => {
  const currentUser = getCurrentUser();

  /* 현재 로그인한 사용자 및 사용자가 팔로우한 이용자 제외 리스트 리턴 */
  const recommendList =
    currentUser &&
    UserList.filter(
      (item) =>
        item.email !== currentUser.email &&
        !currentUser.followers.includes(item.nickName)
    );

  const randomUserList =
    recommendList && recommendList.sort(() => 0.5 - Math.random()).slice(0, 5);

  return (
    <div className='w-[319px]'>
      {currentUser && <UserProfile user={currentUser} type='currentUser' />}

      <ul className='pt-2'>
        <li className='flex px-4 py-2'>
          <span className='text-gray-500 text-sm font-bold flex-grow'>
            회원님을 위한 추천
          </span>
          <span className='text-xs font-bold cursor-pointer'>모두 보기</span>
        </li>
        {randomUserList &&
          randomUserList.map((user, idx) => (
            <li key={idx}>
              <UserProfile user={user} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RecommendUser;
