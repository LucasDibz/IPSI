import { Link } from 'react-router-dom';

export function IPSILogo() {
  return (
    <Link to='/'>
      <img
        src={new URL('/images/logo.jpg', import.meta.url).href}
        alt='NOVA IPSI Logo'
        className='object-cover md:object-contain lg:object-cover h-20 w-28 min-w-28'
        width={112}
        height={80}
      />
    </Link>
  );
}
