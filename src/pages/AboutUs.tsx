import { Body } from '../components';
import { ipsers } from '../config/ipsers';

export function AboutUs() {
  return (
    <Body>
      <div className='z-10 max-w-xl xl:max-w-3xl'>
        <h2 className='text-xl leading-5 text-red-600 font-semibold'>
          About us
        </h2>

        <Body.H1>
          Founded in September 2022, NOVA IPSI is a knowledge Centre part of
          <a
            href='https://novalaw.unl.pt/en/cedis'
            target='_blank'
            rel='noopener noreferrer'
            className='px-3 underline font-bold'
          >
            CEDIS (Centre for Research on Law and Society)
          </a>
          of
          <a
            href='https://novalaw.unl.pt'
            target='_blank'
            rel='noopener noreferrer'
            className='px-3 underline font-bold'
          >
            NOVA School of Law
          </a>
          Lisbon
        </Body.H1>
      </div>

      <Body.Section>
        {Object.values(ipsers).map((category) => (
          <Body.Article key={category.title}>
            <Body.H1>{category.title}</Body.H1>

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
          </Body.Article>
        ))}
      </Body.Section>
    </Body>
  );
}
