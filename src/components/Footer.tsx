import { socials } from '../config/socials';
import { IPSILogo } from './IPSILogo';

export function Footer() {
  return (
    <footer className='mt-10 pb-5 md:pb-0 border-t border-t-slate-700'>
      <div className='mt-5 flex justify-between max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-sm font-medium'>
        <IPSILogo />

        <ul>
          <li className='flex flex-col gap-3 items-center'>
            <h2 className='text-xl tracking-wide'>Social Medias</h2>
            <ul className='flex gap-3'>
              {socials.map(({ href, Icon, color }) => (
                <li key={href}>
                  <a
                    href={href}
                    rel='noopener noreferrer'
                    target='_blank'
                    className='hover:brightness-125 transition'
                  >
                    <Icon color={color} absoluteStrokeWidth={true} />
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>

      <div className='mt-5 text-center text-sm text-gray-500'>
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
    </footer>
  );
}
