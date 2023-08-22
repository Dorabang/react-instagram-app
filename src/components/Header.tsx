import React, { useState } from 'react';
import Logo from '../assets/instagram-logo.png';
import { BiLogoInstagram } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import MenuButton from './Menu/MenuButton';
import { MenuItem } from './Menu/constant';
import { FcMenu } from 'react-icons/fc';
import { FiMenu } from 'react-icons/fi';

const Header = () => {
  const [selected, setSelected] = useState<string>('');
  return (
    <header className='w-[72px] xl:w-[335px] flex flex-col h-[100vh] border-r border-solid border-gray-300'>
      <div className='relative w-full h-full z-[1] px-3 pt-3 pb-6 flex flex-col'>
        <div className='text-xl h-[92px] 2xl:px-1 2xl:pt-[22px] pb-[23px] 2xl:pb-4 mt-3 2xl:mt-0'>
          <Link to='/'>
            <div className='block xl:hidden'>
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
              className='h-[46px] hidden xl:block'
            />
          </Link>
        </div>

        <ul className='flex flex-col gap-3 w-full grow'>
          {MenuItem?.map((menu) => (
            <li>
              <MenuButton
                key={menu.title}
                onClick={(id) => {
                  setSelected(id);
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
    </header>
  );
};

export default Header;
