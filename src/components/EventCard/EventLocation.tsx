import { MapPin } from 'lucide-react';

type EventLocationProps = {
  text?: string;
  location?: {
    latitude: number;
    longitude: number;
  };
};
export const EventLocation = (props: EventLocationProps) => {
  const { text, location } = props;
  const Element = location ? 'a' : 'div';
  const elementProps = location
    ? {
        href: `https://maps.google.com/?q=${location.latitude},${location.longitude}`,
        rel: 'noopener noreferrer',
        target: '_blank',
      }
    : {};

  return (
    <Element
      className={`flex gap-1 ${location ? 'hover:cursor-pointer' : ''}`}
      {...elementProps}
    >
      <MapPin size={15} className='flex-shrink-0' />
      <span className='truncate max-w-56' title={text}>
        {text}
      </span>
    </Element>
  );
};
