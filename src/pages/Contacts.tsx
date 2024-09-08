import { Body } from '../components';

export function Contacts() {
  return (
    <Body>
      <Body.PageTitle>Contacts</Body.PageTitle>

      <Body.Section className='xl:min-h-80'>
        <Body.H1>Would you like to join NOVA IPSI?</Body.H1>

        <Body.Article>
          <p>
            Send your application via email to
            <a href='mailto:ipsi@novalaw.unl.pt'>
              <strong className='px-1'>ipsi@novalaw.unl.pt</strong>
            </a>
            making sure it includes:
          </p>

          <Body.List>
            <li>
              Title of the research project you would like to develop in NOVA
              IPSI;
            </li>
            <li>Short explanation of your research interest in IP law;</li>
            <li>
              1 or 2 suggestions of meaningful readings relevant to the topic IP
              law and sustainability.
            </li>
          </Body.List>
        </Body.Article>
      </Body.Section>
    </Body>
  );
}
