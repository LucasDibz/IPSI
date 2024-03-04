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
          Founded in September 2022, NOVA IPSI is a Knowledge Centre part of the
          Centre for Research on Law and Society
          <a
            href='https://novalaw.unl.pt/en/cedis'
            target='_blank'
            rel='noopener noreferrer'
            className='px-2 underline font-bold'
          >
            (CEDIS)
          </a>{' '}
          of
          <a
            href='https://novalaw.unl.pt/'
            target='_blank'
            rel='noopener noreferrer'
            className='px-2 underline font-bold'
          >
            NOVA School of Law,
          </a>
          Lisbon.
        </Body.H1>
      </div>

      <Body.Section>
        <Body.Article>
          <p>
            At NOVA IPSI we are dedicated to academic research on
            <strong className='px-1'>
              Intellectual Property Law in a society seeking Sustainability.
            </strong>
            Intellectual Property Law in a society seeking Sustainability
          </p>

          <Body.List>
            <li>
              Engaging students and early-career researchers with IP legal
              questions on protection, incentives, and access to knowledge,
              technology, and culture;
            </li>
            <li>
              Enabling senior researchers and faculty members to advance their
              research and transform it into policy advice, legal consultancy,
              legal education, and strategic litigation;
            </li>
            <li>
              Establishing opportunities for dialogue and collaborations between
              academic researchers and key stakeholders.
            </li>
          </Body.List>
        </Body.Article>

        {Object.values(ipsers).map((category) => (
          <Body.Article key={category.title}>
            <Body.H1>{category.title}</Body.H1>

            <div className='flex flex-wrap gap-8 justify-center lg:justify-normal'>
              {category.members
                .filter((member) => !member?.hidden)
                .sort((a, b) => (a.name > b.name ? 1 : -1))
                .map((member) => (
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
