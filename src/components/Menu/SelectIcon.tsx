import React from 'react';
import { IconType } from 'react-icons';

interface SelectIconProps {
  icon: IconType;
  selected: boolean | undefined;
  selectedIcon: IconType;
}

const SelectIcon = ({
  icon: Icon,
  selected,
  selectedIcon: SelectedIcon,
}: SelectIconProps) => {
  const size = 28;
  const css = 'text-neutral-900';
  return (
    <>
      {selected ? (
        <SelectedIcon size={size} className={css} />
      ) : (
        <Icon size={size} className={css} />
      )}
    </>
  );
};

export default SelectIcon;
