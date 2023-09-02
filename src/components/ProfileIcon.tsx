import React from 'react';
import Default_Profile from 'assets/default_profile.jpg';

interface ProfileIconProps {
  size?: 'sm' | 'md' | 'lg';
  profile?: string | undefined;
  userName?: string;
}

const ProfileIcon = ({
  size = 'sm',
  profile = Default_Profile,
  userName,
}: ProfileIconProps) => {
  return (
    <div
      className={`
        border 
        ${profile === undefined ? 'border-neutral-600' : 'border-neutral-400'}
        ${size === 'sm' ? 'w-7 h-7' : ''}
        ${size === 'md' ? 'w-9 h-9' : ''}
        ${size === 'lg' ? 'w-[44px] h-[44px]' : ''}
        rounded-full overflow-hidden
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
