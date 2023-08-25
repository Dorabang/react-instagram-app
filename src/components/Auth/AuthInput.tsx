import React from 'react';
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  ValidationRule,
} from 'react-hook-form';

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  pattern?: ValidationRule<RegExp> | undefined;
  min?: ValidationRule<number> | undefined;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const AuthInput: React.FC<InputProps> = ({
  id,
  label,
  type = 'text',
  disabled,
  pattern,
  min,
  register,
  required,
  errors,
}) => {
  return (
    <div className='relative w-full'>
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required, pattern: pattern, minLength: min })}
        placeholder=''
        type={type}
        className={`
        w-full
        p-3
        pt-7
        font-light
        border
        bg-white
        rounded-md
        outline-none
        disabled:opacity-70
        disabled:cursor-not-allowed
        ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
        ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}
        `}
      />
      <label
        className={`
        absolute
        text-sm
        duration-150
        transform
        -translate-y-3
        top-4
        left-4
        z-10
        origin-[0]
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:-translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-4
      ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}
      `}
      >
        {label}
      </label>
    </div>
  );
};

export default AuthInput;
