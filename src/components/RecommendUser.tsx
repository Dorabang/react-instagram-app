import React from 'react';
import getCurrentUser from 'utils/getUserInfo';
import ProfileIcon from './ProfileIcon';
import UserList, { UserListProps } from 'constants/UserList';
import { Link } from 'react-router-dom';

export const Button = ({
  value,
  variant = 'text',
  size = 'xs',
  hover = false,
}: {
  value: string;
  variant?: string;
  size?: 'xs' | 'sm' | 'base';
  hover?: boolean;
}) => {
  return (
    <div
      className={`
      ${size === 'xs' ? 'text-xs' : ''}
      ${size === 'sm' ? 'text-sm' : ''}
      ${size === 'base' ? 'text-base' : ''}
      ${variant === 'text' ? 'text-sky-500' : ''}
      ${variant === 'contained' ? 'bg-sky-500' : ''}
      ${variant === 'contained' ? 'text-white' : ''}
      ${variant === 'contained' ? 'px-5 py-[6px] rounded-md' : ''}
      ${variant === 'contained' ? 'hover:bg-sky-600' : ''}
      ${variant === 'contained' ? 'active:opacity-70' : ''}
      ${hover ? 'hover:text-sky-700' : ''}
      cursor-pointer
      font-bold`}
    >
      {value}
    </div>
  );
};

export const UserProfile = ({
  user,
  type,
  value,
  variant,
  size,
  hover,
}: {
  user: UserListProps;
  type?: string;
  value: string;
  variant?: string;
  size?: 'xs' | 'sm' | 'base';
  hover?: boolean;
}) => {
  return (
    <div
      className={`flex items-center ${
        type === 'SearchUser' ? 'py-2' : 'px-4 py-[10px]'
      }`}
    >
      <ProfileIcon
        size='lg'
        profile={user?.imageSrc}
        userName={user?.userName}
      />
      <div className='flex-grow pl-2 text-sm'>
        <p className='font-bold'>{user?.nickName}</p>
        <p
          className={`text-gray-500
        ${type === 'SearchUser' ? 'text-base' : 'text-xs'}`}
        >
          {type === 'currentUser'
            ? user?.userName
            : user.description?.substring(0, 20)}
        </p>
      </div>
      <Button value={value} variant={variant} size={size} hover={hover} />
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
      {currentUser && (
        <UserProfile user={currentUser} type='currentUser' value='전환' />
      )}

      <ul className='pt-2'>
        <li className='flex px-4 py-2'>
          <span className='text-gray-500 text-sm font-bold flex-grow'>
            회원님을 위한 추천
          </span>
          <Link
            to='/explore/people'
            className='text-xs font-bold cursor-pointer hover:opacity-70'
          >
            모두 보기
          </Link>
        </li>
        {randomUserList &&
          randomUserList.map((user, idx) => (
            <li key={idx}>
              <UserProfile user={user} value='팔로우' hover={true} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RecommendUser;
