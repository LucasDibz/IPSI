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
      <Body.PageTitle>Our activities</Body.PageTitle>
      <Body.Section className='gap-3'>
        <p>
          Each of us at <strong>NOVA IPSI</strong> carries out legal research
          based on an individual research line fitting within this umbrella
          structure:
        </p>
        <Body.List className='pl-3'>
          <li>
            <strong>Sustainability in IP acquisition</strong>
          </li>
          <li>
            <strong>Sustainability in IP contractual practices</strong>
          </li>
          <li>
            <strong>Sustainability in IP disputes and enforcement</strong>
          </li>
        </Body.List>

        <p className='pt-3'>We conduct legal research based on</p>
        <Body.List className='pl-3'>
          <li>Desk research on legal and other relevant sources</li>
          <li>
            Regular monitoring over legislation, case law, legal doctrine,
            policy documents, initiatives promoted by industries and civil
            society
          </li>
          <li>
            Presentations in academic conferences and other public events to
            collect academic and expert feedback
          </li>
        </Body.List>
      </Body.Section>

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
