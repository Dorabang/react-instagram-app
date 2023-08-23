import React from 'react';
import { IconType } from 'react-icons';
import SelectIcon from './SelectIcon';
import ProfileIcon from '../ProfileIcon';
import { useNavigate } from 'react-router-dom';
import { modalOpenState, navState } from '../../recoil/atoms';
import { useRecoilState, useSetRecoilState } from 'recoil';

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
  const [open, setOpen] = useRecoilState(navState);
  const setModal = useSetRecoilState(modalOpenState);

  const navigate = useNavigate();

  const handleNavOpen = () => {
    if (id === 'search' || id === 'alarm') {
      setOpen(true);
      setModal(true);
    } else if (id === 'direct') {
      setOpen(true);
      setModal(false);
    } else {
      setOpen(false);
      setModal(false);
    }
  };
  return (
    <div
      className={`hover:bg-gray-100 rounded-lg overflow-hidden cursor-pointer
      flex items-center
      ${borderFormat && selected ? 'border border-neutral-200' : ''}
      ${borderFormat && selected ? 'bg-transparent' : ''}
      `}
      onClick={() => {
        onClick(id);
        handleNavOpen();
        if (path) {
          navigate(`${path}`);
        }
      }}
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
      <p className={`${open ? '' : 'xl:block'} hidden`}>{title}</p>
    </div>
  );
};

export default MenuButton;
