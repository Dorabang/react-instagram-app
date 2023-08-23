import { inputState } from '../recoil/atoms';
import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { useRecoilState } from 'recoil';

interface InputProps {
  type?: string;
  disabled?: boolean;
  placeholder?: string;
}

const Input = ({ type = 'text', disabled, placeholder = '' }: InputProps) => {
  const [value, setValue] = useRecoilState(inputState);

  return (
    <span className='relative'>
      <input
        type={type}
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
      ${type === 'text' ? 'bg-neutral-100' : ''}
      `}
      />
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
    </span>
  );
};

export default Input;
