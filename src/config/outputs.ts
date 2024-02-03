import { Author } from './ipsers';

export type Book = {
  title: string;
  subtitle?: string;
  link?: string;
  authors: Author[];
};

type Outputs = {
  [key: string]: {
    title: string;
    books: Book[];
  };
};

export const outputs: Outputs = {
  articles: {
    title: 'Selected scientific articles',
    books: [
      {
        title:
          'Hostile design protection: Could design law help promote inclusivity in European cities?',
        subtitle: 'in Cristiana Sappa (ed.) IP and inclusivity (forthcoming)',
        link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4597403',
        authors: ['Aline Arenque', 'Amanda Novaes', 'Dimitrius Costa'],
      },
      {
        title:
          'Open Educational Resources through the European lens: Pedagogical opportunities and copyright constraints',
        subtitle: '(2023) JIPITEC 14(2) 317-329 (with G Carloni)',
        link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4343475',
        authors: ['Giulia Priora'],
      },
      {
        title:
          'CJEU grapples with the intertwined nature of private copies and retransmission of online television broadcasts',
        subtitle: '(2023) JIPLP 18(10) 709-713',
        link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4551810',
        authors: ['Giulia Priora', 'Amanda Novaes'],
      },
    ],
  },
  conferences: {
    title: 'Selected conference participation',
    books: [
      {
        title: 'Eduardo Santos at the 14 Conferência Lusófona Ciência Aberta',
        subtitle: '19 September 2023',
        link: 'https://www.youtube.com/watch?v=0Qx4Ogq2H_4',
        authors: ['Eduardo Santos'],
      },
    ],
  },
};

// Database
// [
//   {
//     title: 'Direitos de Autor: As recentes alterações legislativas',
//     subtitle: '(UMinho Editora 2023) (with MM Carvalho)',
//     authors: ['Giulia Priora'],
//   },
//   {
//     title: 'The Law and the Digital Classroom',
//     subtitle: 'JIPITEC 14(2) 2023 (with R Ducato)',
//     authors: ['Giulia Priora'],
//   },
//   {
//     title:
//       'Hostile design protection: Could design law help promote inclusivity in European cities?',
//     subtitle: 'in Cristiana Sappa (ed.) IP and inclusivity (forthcoming)',
//     link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4597403',
//     authors: ['Aline Arenque', 'Amanda Novaes', 'Dimitrius Costa'],
//   },
//   {
//     title:
//       'Collective Management of Copyrights and Human Rights in an Age of Technological Automation',
//     subtitle:
//       'in D Gervais/JP Quintais (eds) Collective Management of Copyright and Related Rights (Wolters Kluwer, 2024) pp (with L Helfer)',
//     authors: ['Giulia Priora'],
//   },
//   {
//     title:
//       'An International Instrument on Copyright and Educational Uses: Regulatory Models and Lessons',
//     subtitle:
//       'in J Schovsbo (ed) Intellectual Property Rights in Times of Crisis (Edward Elgar 2024) pp (with F Majekolagbe)',
//     authors: ['Giulia Priora'],
//   },
//   {
//     title:
//       'A nova exceção ao direito de autor para fins educativos e a sua transposição para o direito português',
//     subtitle:
//       '(2023) in MM Carvalho/G Priora (eds) Direitos de Autor: As recentes alterações legislativas (UMinho Editora 2023) 27-40',
//     authors: ['Giulia Priora'],
//   },
//   {
//     title:
//       'Capturing the uncapturable: The relationship between universities and copyright through the lens of the audio-visual lecture capture policies',
//     subtitle:
//       'in C Sappa/E Bonadio (eds) The Subjects of Literary and Artistic Copyright (Edward Elgar 2022) 206-232 (with G Noto La Diega et al)',
//     link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4008227',
//     authors: ['Giulia Priora'],
//   },
//   {
//     title:
//       "Unsettled state of regulation: Italy's hard path towards effective rules for the sharing economy",
//     subtitle:
//       'in V Cesnuityte et al (eds) The Sharing Economy in Europe: Developments, Practices, and Contradictions (Palgrave Macmillan 2022) 305-324 (with M Postiglione et al)',
//     link: 'https://link.springer.com/chapter/10.1007/978-3-030-86897-0_14',
//     authors: ['Giulia Priora'],
//   },
//   {
//     title:
//       'Open Educational Resources through the European lens: Pedagogical opportunities and copyright constraints',
//     subtitle: '(2023) JIPITEC 14(2) 317-329 (with G Carloni)',
//     link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4343475',
//     authors: ['Giulia Priora'],
//   },
//   {
//     title:
//       'Zooming in on education: An empirical study on digital platforms and copyright in the United Kingdom, Italy, and the Netherlands',
//     subtitle: '(2022) EJLT 13(2) (with BJ Jütte et al)',
//     link: 'https://ejlt.org/index.php/ejlt/article/view/873',
//     authors: ['Giulia Priora'],
//   },
//   {
//     title:
//       'Copyright and digital teaching exceptions in the EU: Legislative developments and implementation models of Article 5 CDSM Directive',
//     subtitle: '(2022) IIC 53(4) 543-566 (with BJ Jütte and P Mezei)',
//     link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4080075',
//     authors: ['Giulia Priora'],
//   },
//   {
//     title:
//       'CJEU grapples with the intertwined nature of private copies and retransmission of online television broadcasts',
//     subtitle: '(2023) JIPLP 18(10) 709-713',
//     link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4551810',
//     authors: ['Giulia Priora', 'Amanda Novaes'],
//   },
//   {
//     title:
//       "CJEU rejects Poland's challenge to preventive upload filtering to combat copyright infringement on online platforms",
//     subtitle: '(2022) EIPR (with BJ Jütte)',
//     link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4233278',
//     authors: ['Giulia Priora', 'Amanda Novaes'],
//   },
//   {
//     title:
//       'The moral boundaries of Intellectual Property from a US perspective',
//     subtitle: '(JLPIP, forthcoming)',
//     authors: ['Amanda Novaes'],
//   },
//   {
//     title: 'IP Negative Spaces',
//     subtitle:
//       'in P Torremans/I Stamatoudi/BJ Jütte/P Yu (eds), Elgar Encyclopedia of Intellectual Property Law (Edward Elgar, forthcoming)',
//     authors: ['Giulia Priora'],
//   },
//   {
//     title:
//       'Copyright limitations and exceptions for the use of digital materials in teaching and learning environments',
//     subtitle: 'Education International Policy brief, October 2023',
//     authors: ['Giulia Priora'],
//   },
//   {
//     title:
//       'Learn more about the Policy office hours on non-copyright limitations on public domain',
//     subtitle: '11 December 2023',
//     authors: ['Hande Özkayagan'],
//     link: 'https://pro.europeana.eu/post/learn-more-about-the-policy-office-hours-on-non-copyright-limitations-on-public-domain',
//   },
//   {
//     title:
//       'Genome Editing Technologies and Patent Rights: An Old Story for a New (More Sustainable) Future?',
//     subtitle: '5 December 2023',
//     authors: ['Aline Bratti'],
//     link: 'https://whatnext.law/2023/12/05/genome-editing-technologies-and-patent-rights-an-old-story-for-a-new-more-sustainable-future',
//   },
//   {
//     title: 'O caso Emicida v. Bauducco e o que é Trade Dress',
//     subtitle: '19 October 2023',
//     authors: ['Monyca Motta'],
//     link: 'https://www.linkedin.com/pulse/o-caso-emicida-v-bauducco-e-que-%2525C3%2525A9-trade-dress-monyca-motta%3FtrackingId=ekcMDGX8zJ573DWwXmWj7w%253D%253D/?trackingId=ekcMDGX8zJ573DWwXmWj7w%3D%3D',
//   },
//   {
//     title:
//       'Internet TV services under the scrutiny of EU copyright law: CJEU ruling in Ocilion” Kluwer Copyright Blog,',
//     subtitle: 'Kluwer Copyright Blog, 19 September 2023',
//     authors: ['Giulia Priora', 'Amanda Novaes'],
//     link: 'https://copyrightblog.kluweriplaw.com/2023/09/19/internet-tv-services-under-the-scrutiny-of-eu-copyright-law-cjeu-ruling-in-ocilion',
//   },
//   {
//     title:
//       'Privacy vs. publicity: Balancing the legal protection of trade secrets and whistleblowing',
//     subtitle: '31 July 2023',
//     authors: ['Aleksandra Iugunian'],
//     link: 'https://whatnext.law/2023/07/31/privacy-vs-publicity-balancing-the-legal-protection-of-trade-secrets-and-whistleblowing',
//   },
//   {
//     title: 'A legal field trip to the post-pandemic digital classroom',
//     subtitle: '24 July 2023.',
//     authors: ['Eduardo Santos'],
//     link: 'https://copyrightblog.kluweriplaw.com/2023/07/24/a-legal-field-trip-to-the-post-pandemic-digital-classroom',
//   },
//   {
//     title:
//       'A summary look at the Portuguese transposition of the CDSM Directive',
//     subtitle: 'Kluwer Copyright Blog, 27 June 2023 (with N Sousa e Silva)',
//     authors: ['Giulia Priora'],
//     link: 'https://copyrightblog.kluweriplaw.com/2023/06/27/a-summary-look-at-the-portuguese-transposition-of-the-cdsm-directive',
//   },
//   {
//     title:
//       'Tackling climate change: a story (also) about intellectual property rights and technology transfers',
//     subtitle: '23 May 2023',
//     authors: ['Júlia Schütz Veiga'],
//     link: 'https://whatnext.law/2023/05/23/tackling-climate-change-a-story-also-about-intellectual-property-rights-and-technology-transfers',
//   },
//   {
//     title: 'The Rising Importance of Snippets in Our Daily News Consumption',
//     subtitle: '23 December 2022',
//     authors: ['Inês Miguel'],
//     link: 'https://whatnext.law/en/2022/12/23/the-rising-importance-of-snippets-in-our-daily-news-consumption-2',
//   },
//   {
//     title:
//       "Law ain't Code: Upload filtering technologies and the CDSM Directive",
//     subtitle: '20 December 2022',
//     authors: ['Eduardo Santos'],
//     link: 'https://whatnext.law/en/2022/12/20/law-aint-code-upload-filtering-technologies-and-the-cdsm-directive-2',
//   },
//   {
//     title:
//       "Violazioni dei diritti d'autore online e legittimità del filtraggio in upload: la Corte di Giustizia si esprime sull'Articolo 17 della Direttiva CDSM",
//     subtitle: 'Diritti Comparati, 6 September 2022',
//     authors: ['Giulia Priora'],
//     link: 'https://www.diritticomparati.it/violazioni-dei-diritti-dautore-online-e-legittimita-del-filtraggio-in-upload-la-corte-di-giustizia-si-esprime-sullarticolo-17-della-direttiva-cdsm',
//   },
//   {
//     title:
//       "Empowered to negotiate or obliged to contract? Lessons from the Italian implementation of the press publishers' right",
//     subtitle: 'Kluwer Copyright Blog, 14 April 2022 (with U Furgal)',
//     authors: ['Giulia Priora'],
//     link: 'http://copyrightblog.kluweriplaw.com/2022/04/14/empowered-to-negotiate-or-obliged-to-contract-lessons-from-the-italian-implementation-of-the-press-publishers-right',
//   },
// ];
