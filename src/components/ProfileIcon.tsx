import React from 'react';
import Default_Profile from '../assets/default_profile.jpg';

interface ProfileIconProps {
  size?: number;
  profile?: string;
  userName?: string;
}

const ProfileIcon = ({
  size = 28,
  profile = Default_Profile,
  userName,
}: ProfileIconProps) => {
  return (
    <div
      className={`
        w-[${size}px]
        h-[${size}px]
        rounded-full overflow-hidden
        border border-neutral-400
        `}
    >
      <img
        src={profile}
        alt={`${userName} 프로필 이미지`}
        className='w-full h-full object-cover'
      />
    </div>
  );
};

export default ProfileIcon;
