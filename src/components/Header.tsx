import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
      <nav className='hidden md:flex shadow w-full items-center justify-center p-5 gap-7 border-b border-b-slate-400'>
        {navigation.slice(0, navigation.length / 2).map((item) => (
          <Link
            key={item.href}
            to={`${item.href}`}
            className='cursor-pointer text-slate-900 hover:text-slate-500 font-semibold transition'
          >
            {item.label}
          </Link>
        ))}

        <Link to='/' className='text-3xl text-slate-600 font-bold'>
          IPSI
        </Link>

        {navigation.slice(navigation.length / 2).map((item) => (
          <Link
            key={item.href}
            to={`/${item.href}`}
            className='cursor-pointer text-slate-900 hover:text-slate-500 font-semibold transition'
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Mobile */}
      <nav className='md:hidden w-full shadow'>
        <div className='flex items-center w-full justify-between p-5 flex-wrap gap-5'>
          <Link to='/' className='text-3xl text-slate-600 font-bold'>
            IPSI
          </Link>

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
          className='p-2 flex flex-wrap justify-end gap-3 invisible data-[show=true]:visible'
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
