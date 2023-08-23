import React, { useState } from 'react';
import Logo from '../assets/instagram-logo.png';
import { BiLogoInstagram } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import MenuButton from './Menu/MenuButton';
import { MenuItem } from './Menu/constant';
import { FcMenu } from 'react-icons/fc';
import { FiMenu } from 'react-icons/fi';
import { modalOpenState, navState } from '../recoil/atoms';
import { useRecoilValue } from 'recoil';
import Search from './Search/Search';

const Header = () => {
  const open = useRecoilValue(navState);
  const modal = useRecoilValue(modalOpenState);
  const [selected, setSelected] = useState<string>('home');
  const handleClick = (id: string) => {
    setSelected(id);
  };

  return (
    <header
      className={`
      relative
      z-10
    `}
    >
      <div className='hidden sm:block'>
        <div
          className={`
          ${open ? '' : 'xl:w-[335px]'}
          w-[72px]
          h-[100vh]
          flex
          flex-col
          transition
          px-3
          pt-3
          pb-6
          border-r
          border-solid
        border-gray-300 
        bg-white
          relative
          z-[1]
    `}
        >
          <div
            className={`text-xl h-[92px] pb-0 flex items-center ${
              open ? '' : 'xl:px-1  xl:pb-4 xl:pt-[12px]'
            }`}
          >
            <Link to='/'>
              <div className={`${open ? 'oapcity-100' : 'xl:hidden'} block`}>
                <MenuButton
                  icon={BiLogoInstagram}
                  selectedIcon={BiLogoInstagram}
                  id='logo'
                  onClick={(id) => setSelected(id)}
                />
              </div>
              <img
                src={Logo}
                alt='인스타그램 워드마크 이미지'
                className={`${
                  open ? 'hidden opacity-0' : 'xl:block opacity-100 transition'
                } h-[48px] hidden`}
              />
            </Link>
          </div>

          <ul className='flex flex-col gap-2 w-full grow'>
            {MenuItem?.map((menu) => (
              <li key={menu.id}>
                <MenuButton
                  onClick={(id) => {
                    handleClick(id);
                  }}
                  selected={selected === menu.id}
                  borderFormat={selected === 'alarm' || selected === 'search'}
                  {...menu}
                />
              </li>
            ))}
          </ul>

          <div>
            <MenuButton
              icon={FcMenu}
              selectedIcon={FiMenu}
              id='setting'
              title='더 보기'
              onClick={(id) => setSelected(id)}
              selected={selected === 'setting'}
            />
          </div>
        </div>
        {modal && selected === 'search' && <Search />}
      </div>
    </header>
  );
};

export default Header;
