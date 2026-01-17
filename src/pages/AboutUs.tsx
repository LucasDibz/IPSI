import { Activities, Body } from '../components';
import { AboutUs as AboutUsInfo, Ipsers } from '../components/AboutUs';

export function AboutUs() {
  return (
    <Body className='pt-0'>
      <AboutUsInfo />
      <Activities />
      <Ipsers />
    </Body>
  );
}
