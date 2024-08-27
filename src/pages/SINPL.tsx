import { Body } from '../components';

export function SINPL() {
  return (
    <>
      <Body variant='sinpl'>
        <Body.PageTitle>SINPL-EU</Body.PageTitle>

        <Body.Section>
          <Body.Article>
            <p>
              SINPL-EU is the first course combining EU Intellectual Property
              (IP) Law and Sustainability, reflecting the EU focus on updating
              and harmonizing IP regulations to support sustainable development.
              The project is structured into three main teaching components
            </p>

            <Body.List>
              <li>
                1. Preparatory course on EU IP Law at NOVA School of Law - This
                foundation module introduces the basics of EU IP law.
              </li>

              <li>
                2. Curricular course on IP & Sustainability at NOVA School of
                Law - Taught by specialists in Patents, Trademarks, Copyright,
                Designs, and Trade Secrets of each partner university, this
                module explores how IP law can drive sustainable innovation in
                the EU.
              </li>

              <li>
                3. Online Writing School - Open for the students of all the
                project partner universities, this final component helps
                students develop academic writing skills focused on key EU IP
                legal provisions and their impact on sustainable innovation.
              </li>
            </Body.List>
          </Body.Article>
        </Body.Section>
      </Body>
    </>
  );
}
