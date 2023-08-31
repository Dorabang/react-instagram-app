import React from 'react';
import Default_Profile from 'assets/default_profile.jpg';

interface ProfileIconProps {
  size?: boolean;
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
        border 
        ${profile === undefined ? 'border-neutral-600' : 'border-neutral-400'}
        ${size ? 'w-9 h-9' : 'w-7 h-7'}
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
