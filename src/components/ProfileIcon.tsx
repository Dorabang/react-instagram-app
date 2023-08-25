import React from 'react';
import Default_Profile from '../assets/default_profile.jpg';

interface ProfileIconProps {
  size?: number;
  profile?: string | undefined;
  userName?: string;
}

const ProfileIcon = ({
  size,
  profile = Default_Profile,
  userName,
}: ProfileIconProps) => {
  return (
    <div
      className={`
        ${
          size
            ? `
        w-[${size}px]
        h-[${size}px]
        `
            : 'w-7 h-7'
        }
        rounded-full overflow-hidden
        border border-neutral-400
        `}
    >
      <img
        src={profile === undefined ? Default_Profile : profile}
        alt={`${userName} 프로필 이미지`}
        className='w-full h-full object-cover'
      />
    </div>
  );
};

export default ProfileIcon;
