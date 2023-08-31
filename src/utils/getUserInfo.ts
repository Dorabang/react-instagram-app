import { UserProps } from 'App';
import UserList, { UserListProps } from 'constants/UserList';
import { getItem } from './getSessionStorage';

const getCurrentUser = () => {
  const user: UserProps[] | null = getItem('userInfo');

  const currentUser: UserListProps | null | undefined =
    user !== null && user?.length !== 0 && user !== undefined
      ? UserList.find((item) => item.email === user[0].email)
      : null;

  return currentUser;
};

export default getCurrentUser;
