import { useAllPrismicDocumentsByType } from '@prismicio/react';
import { useMemo } from 'react';
import type { Author } from '../../@types';
import { IpsersHeads } from './IpsersImages';

export const Ipsers = () => {
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
    <section className='z-10 grid gap-6 max-w-2xl xl:max-w-4xl'>
      <IpsersHeads
        {...ipsersProps}
        title='Coordination'
        ipsers={coordinators}
      />
      <IpsersHeads
        {...ipsersProps}
        title='NOVA IPSI Researchers'
        ipsers={investigators}
      />
      <IpsersHeads {...ipsersProps} title='Faculty members' ipsers={teams} />
      <IpsersHeads
        {...ipsersProps}
        title='Advisory board members'
        ipsers={consultors}
      />
    </section>
  );
};
