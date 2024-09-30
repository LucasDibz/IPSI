import { useAllPrismicDocumentsByType } from '@prismicio/react';
import { Body } from '..';
import type { Activity } from '../../@types';
import { ActivitiesCard } from './ActivitiesCard';

export function Activities() {
  const [activities, { state, error }] =
    useAllPrismicDocumentsByType('activities');
  const loading = state === 'loading';

  return (
    <section className='relative container grid gap-8 justify-center md:justify-normal'>
      <Body.PageTitle>Activities</Body.PageTitle>

      <Body.Section className='gap-3 md:grid-cols-2'>
        <ActivitiesCard
          activities={activities as Activity[] | undefined}
          loading={loading}
          error={error}
        />
      </Body.Section>
    </section>
  );
}
