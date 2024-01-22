import { Body } from '../components';
import { Socials } from '../components/Socials';

export function Contacts() {
  return (
    <Body>
      <Body.PageTitle>Contacts</Body.PageTitle>

      <Body.Section>
        <Body.Article>
          <Body.H1>You can reach us through our social medias:</Body.H1>

          <Socials />
        </Body.Article>

        <Body.Section>
          <Body.H1>Want to become part of IPSI?</Body.H1>

          <Body.Article>
            <p>
              Send your application via email to
              <strong className='px-1'>ipsi@novalaw.unl.pt</strong>
              making sure it includes:
              <Body.List>
                <li>
                  Title of the research project you would like to develop in
                  IPSI;
                </li>
                <li>Short explanation of your research interest in IP law;</li>
                <li>
                  1 or 2 suggestions of meaningful readings relevant to the
                  topic IP law and sustainability.
                </li>
              </Body.List>
            </p>
          </Body.Article>
        </Body.Section>
      </Body.Section>
    </Body>
  );
}
