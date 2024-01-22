import { socials } from '../config/socials';

export function Socials() {
  return (
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
  );
}
