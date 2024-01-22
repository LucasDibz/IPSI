import { IPSIDraw } from '../components/IPSIDraw';
import { ipsers } from '../config/ipsers';

export function AboutUs() {
  return (
    <main className='relative container mx-auto px-4 md:px-0 pt-20 grid gap-10'>
      <div className='max-w-3xl xl:max-w-5xl'>
        <h2 className='text-xl leading-5 text-red-600 font-semibold'>
          About us
        </h2>

        <IPSIDraw />
      </div>

      <section className='z-10 grid gap-10 max-w-3xl xl:max-w-4xl md:text-justify'>
        {Object.values(ipsers).map((category) => (
          <article key={category.title}>
            <h1 className='mt-3 px-2 pb-6 text-justify text-3xl leading-6 text-slate-400'>
              {category.title}
            </h1>

            <div className='flex flex-wrap gap-8 justify-center lg:justify-normal'>
              {category.members.map((member) => (
                <a
                  key={member.name}
                  href={member.url}
                  target='_blank'
                  rel='noreferrer'
                  className='group flex flex-col gap-3 items-center w-32'
                >
                  <img
                    src={member.imgSrc}
                    alt={member.name}
                    loading='lazy'
                    className='object-cover rounded-full h-32 w-32 border border-slate-400 shadow group-hover:shadow-lg group-hover:scale-105 transition'
                  />
                  <span className='font-semibold text-lg text-center'>
                    {member.name}
                  </span>
                </a>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
