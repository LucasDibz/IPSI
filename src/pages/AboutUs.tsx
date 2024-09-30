import { Activities, Body } from '../components';
import { AboutUs as AboutUsInfo, Ipsers } from '../components/AboutUs';

export function AboutUs() {
  return (
    <Body>
      <AboutUsInfo />
      <Activities />
      <Ipsers />
    </Body>
  );
}
