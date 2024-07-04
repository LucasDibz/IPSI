import { Menu } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { navigation } from '../config/navigation';
import { IPSILogo } from './IPSILogo';

export function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header className='sticky top-0 w-full z-50 flex items-center bg-white'>
      {/* Desktop */}
      <nav className='hidden md:flex shadow w-full items-center justify-between py-5 px-16 gap-7 border-b border-b-slate-400'>
        <IPSILogo />

        {navigation.map((item) => (
          <div key={item.href} className='h-20 flex items-center'>
            <NavLink
              key={item.href}
              to={`${item.href}`}
              className={({ isActive }) =>
                `cursor-pointer font-semibold hover:text-slate-500 transition relative after:bg-slate-500 after:absolute after:h-[1px] after:mt-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 underline-offset-4${
                  isActive ? ' underline text-slate-500' : ' text-slate-600'
                }`
              }
            >
              {item.label}
            </NavLink>
          </div>
        ))}
      </nav>

      {/* Mobile */}
      <nav className='md:hidden w-full shadow'>
        <div className='bg-white flex items-center w-full justify-between p-5 flex-wrap gap-5'>
          <IPSILogo />

          <button
            className='text-slate-600'
            type='button'
            aria-label='button'
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <Menu />
          </button>
        </div>

        <div
          className='-z-10 absolute w-full bg-white py-2 px-5 flex flex-col items-end gap-3 shadow invisible -translate-y-full data-[show=true]:visible data-[show=true]:translate-y-0 transition-all'
          data-show={navbarOpen}
        >
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              `text-slate-600 font-semibold${
                isActive ? ' underline text-slate-500' : ' text-slate-600'
              }`
            }
            onClick={() => setNavbarOpen(false)}
          >
            Home
          </NavLink>

          {navigation.map((item) => (
            <NavLink
              key={item.href}
              to={`${item.href}`}
              className={({ isActive }) =>
                `text-slate-600 font-semibold${
                  isActive ? ' underline text-slate-500' : ' text-slate-600'
                }`
              }
              onClick={() => setNavbarOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
