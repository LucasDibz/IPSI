export function IPSIDraw() {
  return (
    <img
      className='mt-2 w-28 h-28 top-0 lg:top-auto lg:w-96 lg:h-96 absolute right-0 z-0'
      src={new URL('/images/ipsi-draw-fluid.jpg', import.meta.url).href}
      alt='IPSI Logo'
      loading='lazy'
    />
  );
}
