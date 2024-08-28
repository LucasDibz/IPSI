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
                Preparatory course on EU IP Law at NOVA School of Law - This
                foundation module introduces the basics of EU IP law.
              </li>

              <li>
                Curricular course on IP & Sustainability at NOVA School of Law -
                Taught by specialists in Patents, Trademarks, Copyright,
                Designs, and Trade Secrets of each partner university, this
                module explores how IP law can drive sustainable innovation in
                the EU.
              </li>

              <li>
                Online Writing School - Open for the students of all the project
                partner universities, this final component helps students
                develop academic writing skills focused on key EU IP legal
                provisions and their impact on sustainable innovation.
              </li>
            </Body.List>

            <Body.PageTitle>Project members</Body.PageTitle>
            <Body.List>
              <li>Giulia Priora - Project coordinator</li>
              <li>Amanda Costa Novaes - Coordination assistant</li>
              <li>Luc DesaunettesBarbero, UCLouvain</li>
              <li>
                Pedro Henrique Dias Batista, Max Planck Institute for Innovation
                and Competition
              </li>
              <li>Péter Mezei, University of Szeged</li>
              <li>Pilar Montero GarcíaNoblejas, University of Alicante</li>
              <li>Vicente Gimeno Beviá, University of Alicante</li>
            </Body.List>

            <Body.PageTitle>Project outputs</Body.PageTitle>
            <Body.List>
              <li>Introductory Course on IP law (18 hours)</li>
              <li>SINPL-EU Course on EU IP & Sustainability (30 hours)</li>
              <li>Online Writing School on IP & Sustainability (10 hours)</li>
              <li>Conference on Teaching IP & Sustainability</li>
              <li>
                Conference on IP & Sustainability between theory and practice
              </li>
              <li>Scientific publications</li>
            </Body.List>

            <Body.Article>
              <p>
                <span className='block'>Stay tuned!</span>
                To know more about our SINPL-EU project, reach out at
                <a href='mailto:ipsi@novalaw.unl.pt'>
                  <strong className='px-1'>ipsi@novalaw.unl.pt</strong>
                </a>
              </p>
            </Body.Article>
          </Body.Article>
        </Body.Section>
      </Body>
    </>
  );
}
