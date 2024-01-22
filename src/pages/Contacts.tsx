import { IPSIDraw } from '../components/IPSIDraw';
import { socials } from '../config/socials';

export function Contacts() {
  return (
    <main className='relative container mx-auto px-4 md:px-0 pt-20 grid gap-10'>
      <div className='max-w-3xl xl:max-w-5xl'>
        <h2 className='text-xl leading-5 text-red-600 font-semibold'>
          Contacts
        </h2>

        <IPSIDraw />
      </div>

      <section className='z-10 grid gap-10 max-w-3xl xl:max-w-4xl md:text-justify'>
        <article>
          <h1 className='px-2 pb-10  text-3xl leading-6 text-slate-600'>
            You can reach us through our social medias:
          </h1>

          <ul className='flex gap-3 md:gap-6 justify-center flex-wrap'>
            {socials.map(({ title, href, Icon, color, fill }) => (
              <li key={href}>
                <a
                  href={href}
                  rel='noopener noreferrer'
                  target='_blank'
                  title={title}
                  className='inline-block p-3 rounded-full shadow bg-black hover:brightness-110 hover:scale-110 hover:shadow-lg transition'
                  style={{ background: color }}
                >
                  <Icon
                    size={32}
                    fill={fill}
                    absoluteStrokeWidth={true}
                    strokeWidth={1.3}
                    stroke='white'
                  />
                </a>
              </li>
            ))}
          </ul>
        </article>

        <section>
          <h1 className='mt-3 px-2 pb-6 text-3xl leading-6 text-slate-400'>
            Want to become part of IPSI?
          </h1>

          <article>
            Send your application via email to
            <strong className='px-1'>ipsi@novalaw.unl.pt</strong>
            making sure it includes:
            <ul className='mt-5 list-disc list-inside grid gap-3'>
              <li>
                Title of the research project you would like to develop in IPSI;
              </li>
              <li>Short explanation of your research interest in IP law;</li>
              <li>
                1 or 2 suggestions of meaningful readings relevant to the topic
                IP law and sustainability.
              </li>
            </ul>
          </article>
        </section>
      </section>
    </main>
  );
}
