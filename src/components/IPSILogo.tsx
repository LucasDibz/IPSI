import { Link } from 'react-router-dom';

export function IPSILogo() {
  return (
    <Link to='/'>
      <img
        src={new URL('/images/logo.jpg', import.meta.url).href}
        alt='NOVA IPSI Logo'
        className='object-contain h-20 w-56'
        width={224}
        height={80}
      />
    </Link>
  );
}
