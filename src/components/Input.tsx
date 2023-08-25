import { inputState } from '../recoil/atoms';
import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { useRecoilState } from 'recoil';

interface InputProps {
  type?: string;
  required?: boolean;
  pattern?: string;
  disabled?: boolean;
  placeholder?: string;
  name?: string;
}

const Input = ({
  type = 'text',
  required = false,
  pattern,
  disabled,
  placeholder = '',
  name,
}: InputProps) => {
  const [value, setValue] = useRecoilState(inputState);

  return (
    <span className='relative'>
      <input
        type={type}
        required={required}
        disabled={disabled}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValue(e.target.value);
        }}
        placeholder={placeholder}
        className={`
      px-4
      py-[3px]
      h-10
      w-full
      rounded-lg
      outline-none
      ${name === 'search' ? 'bg-neutral-100' : ''}
      `}
      />
      {name === 'search' && (
        <div
          className='
        absolute right-2 top-1/2 -translate-y-1/2 w-[14px] h-[14px]
        flex justify-center items-center
        text-white bg-gray-300
        rounded-full leading-none
        cursor-pointer
        '
          onClick={() => setValue('')}
        >
          <IoClose size={12} className='text-gray-50' />
        </div>
      )}
      {(name === 'email' ||
        name === 'password' ||
        name === 'userName' ||
        name === 'nickName') && (
        <div
          className='
        absolute right-2 top-1/2 -translate-y-1/2 w-[14px] h-[14px]
        flex justify-center items-center
        text-white bg-gray-300
        rounded-full leading-none
        cursor-pointer
        '
          onClick={() => setValue('')}
        >
          <IoClose size={12} className='text-gray-50' />
        </div>
      )}
    </span>
  );
};

export default Input;
