import React from 'react';
import { IconType } from 'react-icons';
import SelectIcon from './SelectIcon';
import ProfileIcon from '../ProfileIcon';

interface MenuButtonProps {
  icon: IconType;
  title?: string;
  selected?: boolean | undefined;
  path?: string | null | undefined;
  onClick: (value: string) => void;
  id: string;
  borderFormat?: boolean;
  selectedIcon: IconType;
  profile?: string | null | undefined;
}

const MenuButton = ({
  icon: Icon,
  title,
  selected,
  onClick,
  id,
  borderFormat,
  selectedIcon: SelectedIcon,
  profile,
  path,
}: MenuButtonProps) => {
  return (
    <div
      className={`hover:bg-gray-100 rounded-lg overflow-hidden cursor-pointer
      flex items-center
      ${borderFormat && selected ? 'border border-neutral-200' : ''}
      ${borderFormat && selected ? 'bg-transparent' : ''}
      `}
      onClick={() => onClick(id)}
    >
      <div
        className={`
        ${
          selected
            ? 'active:scale-110 active:opacity-70 transition'
            : 'scale-100'
        }
        ${selected ? 'text-neutral-900' : ''}
      ${borderFormat && selected ? 'p-[9px]' : ''}
        transition-duration
        p-[10px]
        `}
      >
        {profile ? (
          <ProfileIcon userName='김ㅇㅇ' />
        ) : (
          <SelectIcon
            selected={selected}
            icon={Icon}
            selectedIcon={SelectedIcon}
          />
        )}
      </div>
      <p className='hidden xl:block'>{title}</p>
    </div>
  );
};

export default MenuButton;
