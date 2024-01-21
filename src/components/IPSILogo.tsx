import { Link } from 'react-router-dom';

export function IPSILogo() {
  return (
    <Link to='/'>
      <img
        src={new URL('/images/logo.jpg', import.meta.url).href}
        alt='IPSI Logo'
        loading='lazy'
        className='object-cover h-20 w-56'
      />
    </Link>
  );
}
