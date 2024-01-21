import { Instagram, Linkedin, Mail, Twitter, Youtube } from 'lucide-react';

const socials = [
  { Icon: Mail, href: 'mailto:ipsi@novalaw.unl.pt', color: 'darkgrey' },
  {
    Icon: Twitter,
    href: 'https://twitter.com/nova_ipsi',
    color: 'darkturquoise',
  },
  {
    Icon: Instagram,
    href: 'https://www.instagram.com/novaipsi/',
    color: 'coral',
  },
  {
    Icon: Youtube,
    href: 'https://www.youtube.com/@novaipsi',
    color: 'red',
  },
  {
    Icon: Linkedin,
    href: 'https://www.linkedin.com/in/nova-ipsi-911838252/',
    color: 'cornflowerblue',
  },
];

export function Footer() {
  return (
    <footer className='mt-10 border-t border-gray-100 dark:border-gray-800'>
      <ul className='max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-sm font-medium sm:pb-20 gap-y-10'>
        <li className='flex flex-col gap-3 items-center'>
          <h2 className='text-xl tracking-wide'>Socials</h2>
          <ul className='flex gap-2'>
            {socials.map(({ href, Icon, color }) => (
              <li key={href}>
                <a
                  key={href}
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

      <div className='text-center text-sm'>
        Copyright © {new Date().getFullYear()}. All rights reserved.
      </div>
      <div className='mt-1 flex justify-center gap-1 text-center text-sm text-gray-500 dark:text-gray-600'>
        <a href='https://github.com/LucasDibz' target='_blank' rel='noreferrer'>
          <span>Made by Lucas Dib </span>
          <span>&middot;</span> Github
        </a>
      </div>
    </footer>
  );
}
