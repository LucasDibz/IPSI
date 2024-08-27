import { useAllPrismicDocumentsByType } from '@prismicio/react';
import type { Activity } from '../@types';
import { Body } from '../components';
import { ActivitiesCard } from '../components/ActivitiesCard';

export function Activities() {
  const [activities, { state, error }] =
    useAllPrismicDocumentsByType('activities');
  const loading = state === 'loading';

  return (
    <Body>
      <Body.PageTitle>Activities</Body.PageTitle>

      <Body.Section className='gap-3 md:grid-cols-2'>
        <ActivitiesCard
          activities={activities as Activity[] | undefined}
          loading={loading}
          error={error}
        />
      </Body.Section>
    </Body>
  );
}
