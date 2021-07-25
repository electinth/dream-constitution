import { FunctionComponent, MouseEventHandler, useState } from 'react';
import Link from 'next/link';
import topics from '../data/topics';

type NavigationBarProps = {
  theme: 'black' | 'transparent';
};

const NavigationBar: FunctionComponent<NavigationBarProps> = ({ theme }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={`${theme === 'black' ? 'bg-black' : undefined} w-[100%]`}>
      <TopBar
        theme={theme}
        button="menu"
        onClick={() => setShowMenu(true)}
      ></TopBar>
      {showMenu ? <Menu onClick={() => setShowMenu(false)}></Menu> : undefined}
    </div>
  );
};

type TopBarProps = {
  theme: 'black' | 'transparent';
  button: 'menu' | 'close';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const TopBar: FunctionComponent<TopBarProps> = ({
  theme,
  button,
  className,
  onClick,
}) => (
  <div className={`${className} w-[100%] flex justify-between items-start`}>
    <img
      className={theme === 'transparent' ? 'p-[16px]' : 'px-[16px] py-[8px]'}
      src={
        theme === 'transparent'
          ? require('../assets/images/logo-large.svg')
          : require('../assets/images/logo-compact.svg')
      }
      alt=""
    ></img>
    <button onClick={onClick}>
      <img
        className="my-[26px] mx-[24px]"
        src={
          button === 'close'
            ? require('../assets/images/close.svg')
            : theme === 'transparent'
            ? require('../assets/images/menu-on-white.svg')
            : require('../assets/images/menu-on-black.svg')
        }
        alt=""
        width={button === 'menu' ? 16 : 14}
        height={button === 'menu' ? 12 : 14}
      ></img>
    </button>
  </div>
);

type MenuProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Menu: FunctionComponent<MenuProps> = ({ onClick }) => (
  <div className="bg-black fixed w-[100%] h-[100%] top-0 flex flex-col">
    <TopBar theme="black" button="close" onClick={onClick}></TopBar>
    <div className="flex flex-col space-y-[16px] p-[16px] overflow-y-scroll">
      <Link href="/" passHref>
        <MenuItem
          topicNumber={0}
          subtitle="หน้าหลัก"
          title="รัฐธรรมนูญในฝันออกแบบได้"
          active={false}
        ></MenuItem>
      </Link>
      {topics.map((t) => (
        <Link href={`/topics/${t.topicNumber}`} passHref key={t.topicNumber}>
          <MenuItem
            topicNumber={t.topicNumber}
            subtitle={`หมวดที่ ${t.topicNumber}: ${t.shortTitle}`}
            title={t.title}
            active={false}
          ></MenuItem>
        </Link>
      ))}
    </div>
  </div>
);

interface MenuItemProps {
  topicNumber: number;
  title: string;
  subtitle: string;
  active: boolean;
  href?: string;
}

const MenuItem: FunctionComponent<MenuItemProps> = ({
  topicNumber,
  title,
  subtitle,
  active,
  href,
}) => (
  <a href={href}>
    <div className="flex px-[8px] py-[20px] items-center space-x-[16px] text-white border-[4px] border-gray-500 rounded-[12px]">
      <div className="text-large-1 min-w-[60px] text-center">{topicNumber}</div>
      <div className="grid-rows-1">
        <div className="text-small-1">{subtitle}</div>
        <div className="text-headline-2">{title}</div>
      </div>
    </div>
  </a>
);

export default NavigationBar;