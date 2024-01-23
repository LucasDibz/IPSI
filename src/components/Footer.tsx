import { Link } from 'react-router-dom';

import { navigation } from '../config/navigation';
import { socials } from '../config/socials';
import { IPSILogo } from './IPSILogo';

export function Footer() {
  return (
    <footer className='mt-10 pb-5 md:pb-0 border-t border-t-slate-400'>
      <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
        <div className='md:flex md:justify-between'>
          <IPSILogo />
          <div>
            <ul className='pt-6 pb-3 flex flex-col items-end md:items-start md:flex-row gap-2 md:gap-8 text-slate-700 font-semibold'>
              <li>
                <Link to={'/'}>Home</Link>
              </li>

              {navigation.map((item) => (
                <li key={item.href}>
                  <Link to={`${item.href}`}>{item.label}</Link>
                </li>
              ))}
            </ul>
            <ul className='grid grid-cols-2 gap-8 py-3 sm:grid-cols-3 text-slate-500 font-medium'>
              <li>
                <a
                  href='https://novalaw.unl.pt/en/privacy-policy'
                  target='_blank'
                  rel='noreferrer'
                  className='hover:underline'
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href='https://novalaw.unl.pt/en/cookie-policy'
                  target='_blank'
                  rel='noreferrer'
                  className='hover:underline'
                >
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className='my-3 md:my-6 border-slate-200 sm:mx-auto lg:my-8' />

        <div className='sm:flex sm:items-center sm:justify-between'>
          <div className='flex gap-2 mt-4 justify-center sm:mt-0'>
            {socials.map(({ href, Icon, color, title }) => (
              <a
                href={href}
                rel='noopener noreferrer'
                target='_blank'
                className='text-slate-500 hover:text-slate-900'
              >
                <span className='sr-only'>{title}</span>
                <Icon color={color} absoluteStrokeWidth={true} />
              </a>
            ))}
          </div>

          <div className='mt-5 pb-3 text-center text-xs text-slate-500'>
            Copyright © {new Date().getFullYear()}. All rights reserved.
            <div className='mt-1 flex justify-center gap-1'>
              <a
                href='https://github.com/LucasDibz'
                target='_blank'
                rel='noreferrer'
              >
                <span>Made by Lucas Dib </span>
                <span>&middot;</span> Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
