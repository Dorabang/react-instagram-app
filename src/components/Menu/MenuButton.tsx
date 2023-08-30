import React from 'react';
import { IconType } from 'react-icons';
import SelectIcon from 'components/Menu/SelectIcon';
import ProfileIcon from 'components/ProfileIcon';
import { useNavigate } from 'react-router-dom';
import { modalOpenState, navState } from '../../recoil/atoms';
import { useRecoilState, useSetRecoilState } from 'recoil';

interface MenuButtonProps {
  icon: IconType;
  selectedIcon: IconType;
  id: string;
  onClick: (value: string) => void;
  title?: string;
  selected?: boolean | undefined;
  path?: string | null | undefined;
  profile?: {
    imageSrc: string | undefined;
    nickName: string | undefined;
    description: string | undefined;
  };
  borderFormat?: boolean;
}

const MenuButton = ({
  icon: Icon,
  selectedIcon: SelectedIcon,
  id,
  onClick,
  title,
  selected,
  path,
  profile,
  borderFormat,
}: MenuButtonProps) => {
  const [open, setOpen] = useRecoilState(navState);
  const setModal = useSetRecoilState(modalOpenState);

  const navigate = useNavigate();

  const handleNavOpen = () => {
    if (id === 'search' || id === 'alarm') {
      setOpen((prev) => !prev);
      setModal((prev) => !prev);
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
          <ProfileIcon userName={profile.nickName} profile={profile.imageSrc} />
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
