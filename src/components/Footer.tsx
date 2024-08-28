import { socials } from '../config/socials';

type FooterProps = {
  partners?: boolean;
};
export function Footer({ partners }: FooterProps) {
  return (
    <footer className='bg-background mt-10 pb-5 md:pb-0 border-t border-t-slate-400'>
      <div className='mx-auto w-full p-5 md:px-16'>
        <div className='flex-wrap md:flex md:justify-between'>
          <ul className='pt-6 pb-3 flex flex-wrap-reverse items-center justify-center md:flex-row gap-3 md:gap-8 text-slate-500 font-medium'>
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

          {partners && <Partners />}
        </div>

        <hr className='my-3 md:my-6 border-slate-300 sm:mx-auto lg:my-8' />

        <div className='sm:flex sm:items-center sm:justify-between'>
          <div className='flex gap-2 mt-4 justify-center sm:mt-0'>
            {socials.map(({ href, Icon, color, title }) => (
              <a
                key={href}
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

const Partners = () => {
  return (
    <>
      <ul className='pt-6 pb-3 flex flex-wrap-reverse items-center justify-center md:flex-row gap-2 md:gap-8'>
        <img
          src={new URL('/images/FCT_logo.svg', import.meta.url).href}
          alt='FCT Logo'
          loading='lazy'
          className='object-contain w-24 md:w-36'
          width={144}
          height={46}
        />

        <img
          src={new URL('/images/CEDIS_logo.png', import.meta.url).href}
          alt='CEDIS Logo'
          loading='lazy'
          className='object-contain w-36 md:w-56'
          width={224}
          height={56}
        />

        <img
          src={new URL('/images/portuguese_republic.svg', import.meta.url).href}
          alt='Portuguese Republic logo'
          loading='lazy'
          className='object-contain w-44 md:w-36'
          width={144}
          height={67}
        />
      </ul>

      <span className='block text-justify text-slate-500 font-medium text-xs'>
        NOVA Intellectual Property and Sustainable Innovation (NOVA IPSI) is
        part of CEDIS - Research & Development Centre on Law and Society, the
        Research Unit of NOVA School of Law, Universidade NOVA de Lisboa. CEDIS
        is funded by FCT, I.P. (Foundation for Science and Technology, Public
        Institute), through national funds from the Portuguese Ministry of
        Science, Technology and Higher Education, under projects UIDB/00714/2020
        and UIDP/00714/2020
      </span>
    </>
  );
};
