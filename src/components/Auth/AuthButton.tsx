import React from 'react';
import { IconType } from 'react-icons';

interface ButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const AuthButton: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}) => {
  return (
    <button
      type='submit'
      disabled={disabled}
      onClick={onClick}
      className={`
      relative
      disabled:opacity-70
      disabled:cursor-not-allowed
      rounded-lg
      hover:bg-sky-700
      transition
      w-full
      ${outline ? 'bg-white' : 'bg-sky-500'}
      ${outline ? 'border-black' : 'border-sky-500'}
      ${outline ? 'hover:border-black' : 'hover:border-sky-700'}
      ${outline ? 'text-black' : 'text-white'}
      ${small ? 'text-sm' : 'text-md'}
      ${small ? 'py-1' : 'py-2'}
      ${small ? 'font-light' : 'font-semibold'}
      ${small ? 'border' : 'border-2'}
    `}
    >
      {Icon && <Icon size={24} className='absolute left-4 top-3' />}
      {label}
    </button>
  );
};

export default AuthButton;
