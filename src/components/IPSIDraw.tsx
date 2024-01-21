export function IPSIDraw() {
  return (
    <img
      className='w-28 h-28 top-0 lg:top-auto lg:w-64 lg:h-64 xl:h-96 xl:w-96 absolute right-0 z-0'
      src={new URL('/images/ipsi-draw-fluid.jpg', import.meta.url).href}
      alt='IPSI Logo'
      loading='lazy'
      width={384}
      height={384}
    />
  );
}
