import { Instagram, Mail, Menu, Twitter, Youtube } from 'lucide-react';
import { useState } from 'react';

const navigation = [
  { label: 'About us', href: 'about-us' },
  { label: 'Activities', href: 'activities' },
  { label: 'Outputs', href: 'outputs' },
  { label: 'Contacts', href: 'contacts' },
];

const contacts = [
  { Icon: Mail, href: 'mailto:ipsi@novalaw.unl.pt' },
  { Icon: Twitter, href: 'https://twitter.com/novaipsi' },
  { Icon: Instagram, href: 'https://www.instagram.com/novaipsi/' },
  { Icon: Youtube, href: 'https://www.youtube.com/@novaipsi' },
];

/* Contact links */
/* {contacts.map(({ href, Icon }) => (
            <a
              href={href}
              rel="noopener noreferrer"
              target="_blank"
              className="hidden md:inline-block"
            >
              <Icon />
            </a>
          ))} */

export function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header className='fixed top-0 w-full z-50 flex items-center'>
      {/* Desktop */}
      <nav className='hidden md:flex w-full items-center justify-center p-5 gap-7 border-b border-b-slate-400'>
        {navigation.slice(0, navigation.length / 2).map((item) => (
          <a
            key={item.href}
            href={`/${item.href}`}
            className='cursor-pointer text-slate-900 hover:text-slate-500 font-semibold transition'
          >
            {item.label}
          </a>
        ))}

        <a href='/' className='text-3xl text-slate-600 font-bold'>
          IPSI
        </a>

        {navigation.slice(navigation.length / 2).map((item) => (
          <a
            key={item.href}
            href={`/${item.href}`}
            className='cursor-pointer text-slate-900 hover:text-slate-500 font-semibold transition'
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Mobile */}
      <nav className='md:hidden w-full'>
        <div className='flex items-center w-full justify-between p-5 flex-wrap gap-5'>
          <a href='/' className='text-3xl text-slate-600 font-bold'>
            IPSI
          </a>

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
          className='px-2 flex flex-wrap justify-end gap-3 invisible data-[show=true]:visible'
          data-show={navbarOpen}
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={`/${item.href}`}
              className='cursor-pointer text-slate-900 hover:text-slate-500 font-semibold transition'
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
