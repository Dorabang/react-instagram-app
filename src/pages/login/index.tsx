import React from 'react';
import AuthForm from '../../components/Auth/AuthForm';
import { getItem } from '../../utils/getSessionStorage';
import { UserProps } from '../../App';
import { useNavigate } from 'react-router-dom';
import loginImg from 'assets/instagram_login.png';

const LoginPage = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='w-full max-w-[850px] flex justify-center items-center flex-grow'>
        <img
          src={loginImg}
          alt='인스타그램 기능 설명 이미지'
          className='mr-6'
        />
        <AuthForm type='login' />
      </div>
    </div>
  );
};

export default LoginPage;
