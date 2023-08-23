import { IconType } from 'react-icons/lib';
import { GoHomeFill, GoHome } from 'react-icons/go';
import { PiPlusSquareFill, PiPlusSquare } from 'react-icons/pi';
import { BiMoviePlay, BiSolidMoviePlay } from 'react-icons/bi';
import { MdOutlineExplore } from 'react-icons/md';
import { LiaHeart, LiaHeartSolid } from 'react-icons/lia';
import { IoIosSearch } from 'react-icons/io';
import {
  IoPaperPlane,
  IoPaperPlaneOutline,
  IoSearch,
  IoCompassOutline,
  IoCompass,
} from 'react-icons/io5';
import Default_Profile from '../../assets/default_profile.jpg';

export interface MenuItemProps {
  id: string;
  icon: IconType;
  selectedIcon: IconType;
  title: string;
  path?: string | null;
  profile?: string | null;
  selected?: boolean;
}

export const MenuItem: MenuItemProps[] = [
  {
    id: 'home',
    icon: GoHome,
    selectedIcon: GoHomeFill,
    title: '홈',
    path: '/',
  },
  { id: 'search', icon: IoIosSearch, selectedIcon: IoSearch, title: '검색' },
  {
    id: 'explore',
    icon: IoCompassOutline,
    selectedIcon: IoCompass,
    title: '탐색',
    path: '/explore',
  },
  {
    id: 'reels',
    icon: BiMoviePlay,
    selectedIcon: BiSolidMoviePlay,
    title: '릴스',
    path: '/reels',
  },
  {
    id: 'direct',
    icon: IoPaperPlaneOutline,
    selectedIcon: IoPaperPlane,
    title: '메시지',
    path: '/direct/inbox',
  },
  {
    id: 'alarm',
    icon: LiaHeart,
    selectedIcon: LiaHeartSolid,
    title: '알림',
  },
  {
    id: 'make',
    icon: PiPlusSquare,
    selectedIcon: PiPlusSquareFill,
    title: '만들기',
    path: '/explore',
  },
  {
    id: 'profile',
    icon: MdOutlineExplore,
    selectedIcon: IoIosSearch,
    title: '프로필',
    path: '/dora_bangs',
    profile: Default_Profile,
  },
];
