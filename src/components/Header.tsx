import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IPSILogo } from './IPSILogo';

const navigation = [
  { label: 'About us', href: 'about-us' },
  { label: 'Activities', href: 'activities' },
  { label: 'Outputs', href: 'outputs' },
  { label: 'Contacts', href: 'contacts' },
];

export function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header className='sticky top-0 w-full z-50 flex items-center bg-white'>
      {/* Desktop */}
      <nav className='hidden md:flex shadow w-full items-center justify-around p-5 gap-7 border-b border-b-slate-400'>
        <IPSILogo />

        {navigation.map((item) => (
          <div key={item.href} className='h-20 flex items-center'>
            <NavLink
              key={item.href}
              to={`${item.href}`}
              className={({ isActive }) =>
                `cursor-pointer font-semibold text-slate-900 hover:text-slate-500 transition relative after:bg-slate-500 after:absolute after:h-[1px] after:mt-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 underline-offset-4${
                  isActive ? ' underline' : ''
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
        <div className='flex items-center w-full justify-between p-5 flex-wrap gap-5'>
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
          className='py-2 px-5 flex-col items-end gap-3 hidden data-[show=true]:flex'
          data-show={navbarOpen}
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              to={`${item.href}`}
              className='cursor-pointer text-slate-900 hover:text-slate-500 font-semibold transition'
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
