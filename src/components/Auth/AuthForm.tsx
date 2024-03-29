import React from 'react';
import Logo from 'assets/instagram-logo.png';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import AuthInput from 'components/Auth/AuthInput';
import AuthButton from 'components/Auth/AuthButton';
import { Link, useNavigate } from 'react-router-dom';
import UserList from 'constants/UserList';
import { setItem } from 'utils/getSessionStorage';

export interface UserInfoProps {
  email: string;
  password: string;
  userName?: string;
  nickName?: string;
  createdAt?: string;
}

const AuthForm = ({ type }: { type: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: { email: '', userName: '', nickName: '', password: '' },
  });

  const navigate = useNavigate();

  let user;

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const { email, password, userName, nickName } = data;

    if (type === 'register') {
      const createdAt = new Date();
      user = [
        {
          email: email,
          password: password,
          userName: userName,
          nickName: nickName,
          createdAt: createdAt.toString(),
        },
      ];
      setItem('userInfo', user);
      alert('회원가입이 성공적으로 완료되었습니다.');
      navigate(0);
    }
    const userList = UserList.find((item) => item.email === String(email));

    if (type === 'login') {
      if (userList) {
        user = [
          {
            email: email,
            password: password,
          },
        ];
        setItem('userInfo', user);
        alert('로그인이 성공적으로 완료되었습니다.');
        navigate(0);
      }
    }
  };

  return (
    <div className='w-full h-[90vh] flex justify-center items-center'>
      <div className='max-w-[350px] flex flex-col justify-center flex-grow'>
        <div className='border border-gray-300 flex flex-col items-center py-9'>
          <div className='mb-3'>
            <img src={Logo} alt='Logo 이미지' className='w-[175px]' />
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className='px-10 mt-3 w-full flex flex-col gap-2'
          >
            <AuthInput
              id='email'
              label='휴대폰 번호 또는 이메일'
              pattern={/[a-zA-Z0-9]+[@]+[a-zA-Z0-9]/i}
              register={register}
              errors={errors}
              required
            />
            {type === 'register' && (
              <>
                <AuthInput
                  id='userName'
                  label='성함'
                  register={register}
                  errors={errors}
                  required
                />
                <AuthInput
                  id='nickName'
                  label='사용자 이름'
                  register={register}
                  errors={errors}
                  required
                />
              </>
            )}
            <AuthInput
              id='password'
              type='password'
              label='비밀번호'
              min={5}
              register={register}
              errors={errors}
              required
            />
            {type === 'register' && (
              <div className='text-xs text-gray-500 my-2'>
                저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에
                업로드했을 수도 있습니다.{' '}
                <span className='text-gray-800'>더 알아보기</span>
              </div>
            )}
            <AuthButton label={type === 'register' ? '가입' : '로그인'} />
          </form>
        </div>

        <div className='border border-gray-300 mt-4 py-3'>
          <div className='text-center text-sm p-4'>
            {type === 'register' ? (
              <>
                <span>계정이 있으신가요?</span>{' '}
                <Link className='text-sky-500 font-bold cursor-pointer' to='/'>
                  로그인
                </Link>
              </>
            ) : (
              <>
                <span>아직 회원이 아니신가요?</span>{' '}
                <Link
                  className='text-sky-500 font-bold cursor-pointer'
                  to='/register'
                >
                  가입하기
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
