import React, { useEffect } from 'react';
import AuthForm from 'components/Auth/AuthForm';
import { getItem } from 'utils/getSessionStorage';
import { useNavigate } from 'react-router-dom';
import { UserProps } from 'App';

const RegisterPage = () => {
  const user: UserProps[] | undefined = getItem('userInfo');

  const navigate = useNavigate();

  /* useEffect(() => {
    user?.length !== 0 && navigate('/login' || '/register');
  }, [user]); */
  return (
    <>
      <AuthForm type='register' />
    </>
  );
};

export default RegisterPage;
