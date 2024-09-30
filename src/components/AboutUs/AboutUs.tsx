import { Body } from '../Body';

export const AboutUs = () => {
  return (
    <>
      <Body.PageTitle>About us</Body.PageTitle>

      <Body.Section>
        <Body.Article>
          <p>
            NOVA IPSI is a Knowledge Centre part of the Centre for Research on
            Law and Society
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
          </p>

          <p>
            At NOVA IPSI we are dedicated to academic research on
            <strong className='px-1'>
              Intellectual Property Law in a society seeking Sustainability.
            </strong>
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
      </Body.Section>
    </>
  );
};
