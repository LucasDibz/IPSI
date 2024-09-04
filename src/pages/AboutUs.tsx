import { useAllPrismicDocumentsByType } from '@prismicio/react';
import { useMemo } from 'react';
import type { Author } from '../@types';
import { Body } from '../components';
import { Ipsers } from '../components/Ipsers';

export function AboutUs() {
  const [ipsers, { state, error }] = useAllPrismicDocumentsByType('ipsers');
  const loading = state === 'loading';

  const { coordinators, investigators, teams, consultors } = useMemo(() => {
    return {
      coordinators: ipsers?.filter(
        (author) => author.data.occupation === 'coordination',
      ) as Author[] | undefined,
      investigators: ipsers?.filter(
        (author) => author.data.occupation === 'investigator',
      ) as Author[] | undefined,
      teams: ipsers?.filter((author) => author.data.occupation === 'team') as
        | Author[]
        | undefined,
      consultors: ipsers?.filter(
        (author) => author.data.occupation === 'consultor',
      ) as Author[] | undefined,
    };
  }, [ipsers]);

  const ipsersProps = {
    loading: loading,
    error: error,
  };

  return (
    <Body>
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

        <Ipsers {...ipsersProps} title='Coordination' ipsers={coordinators} />
        <Ipsers
          {...ipsersProps}
          title='NOVA IPSI Researchers'
          ipsers={investigators}
        />
        <Ipsers {...ipsersProps} title='Faculty members' ipsers={teams} />
        <Ipsers
          {...ipsersProps}
          title='Advisory board members'
          ipsers={consultors}
        />
      </Body.Section>
    </Body>
  );
}
