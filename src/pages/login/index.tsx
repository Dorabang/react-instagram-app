import React from 'react';
import AuthForm from '../../components/Auth/AuthForm';
import { getItem } from '../../utils/getSessionStorage';
import { UserProps } from '../../App';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const user: UserProps[] | undefined = getItem('userInfo');

  const navigate = useNavigate();
  /* 
  useEffect(() => {
    user?.length !== 0 && navigate('/login' || '/register');
  }, [user]); */

  return <AuthForm type='login' />;
};

export default LoginPage;
