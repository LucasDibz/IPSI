export type Author =
  | 'Aleksandra Iugunian'
  | 'Aline Arenque'
  | 'Aline Bratti'
  | 'Amanda Costa Novaes'
  | 'Athina Sachoulidou'
  | 'Carys Craig'
  | 'Claire Bright'
  | 'Cristina Nogueira da Silva'
  | 'Dimitrius Costa'
  | 'Diogo Brandão'
  | 'Duarte Manso'
  | 'Eduardo Santos'
  | 'Francisco Lobão Alonso'
  | 'Francisco Pereira Coutinho'
  | 'Giulia Priora'
  | 'Hande Özkayagan'
  | 'Inês Miguel'
  | 'João Pedro Quintais'
  | 'João Zenha Martins'
  | 'Jorge Morais Carvalho'
  | 'Júlia Schütz Veiga'
  | 'Justyna Pałczyńska'
  | 'Marco Scialdone'
  | 'Margarida Mingote'
  | 'Margarida Morgado'
  | 'Marisa Frade'
  | 'Marta Beleza'
  | 'Marta Diniz'
  | 'Miguel de Azevedo Moura'
  | 'Monyca Motta'
  | 'Oumaima Derfoufi'
  | 'Pedro Soares'
  | 'Pilar Montero'
  | 'Raquel Cunha'
  | 'Raquel Escada Carvalho'
  | 'Rúben Ferreira'
  | 'Teresa Brito e Faro'
  | 'Diana Pryshchepova'
  | 'Luc Desaunettes-Barbero'
  | 'Pedro Henrique D. Batista'
  | 'Péter Mezei'
  | 'Vicente Gimeno Beviá';

type Ipsers = {
  [key: string]: {
    title: string;
    members: LocalIpser[];
  };
};

export type LocalIpser = {
  name: Author;
  imgSrc: string;
  url: string;
  hidden?: boolean;
};

export const SINPL_ROLES = new Map([
  ['Giulia Priora', 'NOVA School of Law'],
  ['Amanda Costa Novaes', 'NOVA School of Law'],
  ['Luc Desaunettes-Barbero', 'UCLouvain'],
  [
    'Pedro Henrique D. Batista',
    'Max Planck Institute for Innovation and Competition',
  ],
  ['Péter Mezei', 'University of Szeged'],
  ['Pilar Montero', 'University of Alicante'],
  ['Vicente Gimeno Beviá', 'University of Alicante'],
]);

export const ipsers: Ipsers = {
  sinpl: {
    title: 'SINPL-EU',
    members: [
      {
        name: 'Luc Desaunettes-Barbero',
        imgSrc: new URL('/images/members/luc_barbero.jpg', import.meta.url)
          .href,
        url: 'https://www.linkedin.com/in/lucdesaunettes',
        hidden: true,
      },
      {
        name: 'Pedro Henrique D. Batista',
        imgSrc: new URL('/images/members/pedro_batista.jpg', import.meta.url)
          .href,
        url: 'https://www.linkedin.com/in/pedro-henrique-d-batista-4171a3154',
        hidden: true,
      },
      {
        name: 'Péter Mezei',
        imgSrc: new URL('/images/members/peter_mezei.jpg', import.meta.url)
          .href,
        url: 'https://www.linkedin.com/in/peter-mezei-8b36641a',
        hidden: true,
      },
      {
        name: 'Vicente Gimeno Beviá',
        imgSrc: new URL('/images/members/vicente_bevia.jpg', import.meta.url)
          .href,
        url: 'https://www.linkedin.com/in/vicente-gimeno-bevi%C3%A1-259634135',
        hidden: true,
      },
    ],
  },
  coordination: {
    title: 'Coordination',
    members: [
      {
        name: 'Giulia Priora',
        imgSrc: new URL('/images/members/giulia_priora.jpeg', import.meta.url)
          .href,
        url: 'https://novalaw.unl.pt/giulia-priora',
      },
    ],
  },
  investigators: {
    title: 'NOVA IPSI Researchers',
    members: [
      {
        name: 'Aleksandra Iugunian',
        imgSrc: new URL(
          '/images/members/aleksandra_iugunian.jpg',
          import.meta.url,
        ).href,
        url: 'https://www.linkedin.com/in/aleksandra-iugunian',
      },
      {
        name: 'Aline Arenque',
        imgSrc: new URL('/images/members/aline_arenque.jpg', import.meta.url)
          .href,
        url: 'https://www.linkedin.com/in/alinearenque',
      },
      {
        name: 'Aline Bratti',
        imgSrc: new URL('/images/members/aline_bratti.jpg', import.meta.url)
          .href,
        url: 'https://www.linkedin.com/in/aline-bratti',
      },
      {
        name: 'Amanda Costa Novaes',
        imgSrc: new URL('/images/members/amanda_novaes.jpeg', import.meta.url)
          .href,
        url: 'https://www.linkedin.com/in/amanda-costa-novaes-75bab6191',
      },
      {
        name: 'Dimitrius Costa',
        hidden: true,
        imgSrc: new URL('/images/members/dimitrius_costa.jpg', import.meta.url)
          .href,
        url: 'https://www.linkedin.com/in/dimitrius-costa-780307256',
      },
      {
        name: 'Diogo Brandão',
        imgSrc: new URL('/images/members/diogo_brandao.jpg', import.meta.url)
          .href,
        url: 'https://www.linkedin.com/in/diogo-matos-brand%C3%A3o-b849a1134/',
      },
      {
        name: 'Eduardo Santos',
        imgSrc: new URL('/images/members/eduardo_santos.jpg', import.meta.url)
          .href,
        url: 'https://edsantos.eu/',
      },
      {
        name: 'Hande Özkayagan',
        imgSrc: new URL('/images/members/hande_ozkayagan.jpg', import.meta.url)
          .href,
        url: 'https://id.univie.ac.at/en/team/univ-prof-dr-nikolaus-forgo/team/oezkayagan-praendl-hande',
      },
      {
        name: 'Inês Miguel',
        imgSrc: new URL('/images/members/ines_miguel.jpg', import.meta.url)
          .href,
        url: 'https://www.linkedin.com/in/inesmiguel99',
        hidden: true,
      },
      {
        name: 'Júlia Schütz Veiga',
        imgSrc: new URL(
          '/images/members/julia_schutz_veiga.jpg',
          import.meta.url,
        ).href,
        url: 'https://www.linkedin.com/in/j%C3%BAlia-sch%C3%BCtz-veiga-668140144',
      },
      {
        name: 'Justyna Pałczyńska',
        imgSrc: new URL(
          '/images/members/justyna_palczynska.jpg',
          import.meta.url,
        ).href,
        url: 'https://www.linkedin.com/in/justyna-pa%C5%82czy%C5%84ska-a3235b1a5',
      },
      {
        name: 'Margarida Mingote',
        imgSrc: new URL(
          '/images/members/margarida_mingote.jpg',
          import.meta.url,
        ).href,
        url: 'https://www.linkedin.com/in/margaridamingote',
      },
      {
        name: 'Margarida Morgado',
        imgSrc: new URL(
          '/images/members/margarida_morgado.jpg',
          import.meta.url,
        ).href,
        url: 'https://www.linkedin.com/in/margarida-morgado',
        hidden: true,
      },
      {
        name: 'Marisa Frade',
        imgSrc: new URL('/images/members/marisa_frade.jpg', import.meta.url)
          .href,
        url: 'https://www.linkedin.com/in/marisa-frade',
      },
      {
        name: 'Monyca Motta',
        hidden: true,
        imgSrc: new URL('/images/members/monyca_motta.jpg', import.meta.url)
          .href,
        url: 'https://www.linkedin.com/in/monycamotta',
      },
      {
        name: 'Oumaima Derfoufi',
        imgSrc: new URL('/images/members/oumaima_derfoufi.jpg', import.meta.url)
          .href,
        url: 'https://www.linkedin.com/in/oumaima-derfoufi-0b9417135',
        hidden: true,
      },
      {
        name: 'Pedro Soares',
        imgSrc: new URL('/images/members/pedro_soares.jpg', import.meta.url)
          .href,
        url: 'https://www.linkedin.com/in/pedro-soares-2a2b95246',
      },
      {
        name: 'Raquel Cunha',
        imgSrc: new URL('/images/members/raquel_cunha.jpg', import.meta.url)
          .href,
        url: 'https://www.linkedin.com/in/raquel-castro-cunha-0047a1211',
      },
      {
        name: 'Raquel Escada Carvalho',
        hidden: true,
        imgSrc: new URL(
          '/images/members/raquel_escada_carvalho.jpg',
          import.meta.url,
        ).href,
        url: 'https://www.linkedin.com/in/raquel-escada-carvalho',
      },
      {
        name: 'Rúben Ferreira',
        imgSrc: new URL('/images/members/ruben_ferreira.jpg', import.meta.url)
          .href,
        url: 'https://www.linkedin.com/in/rvbenferreira',
        hidden: true,
      },
      {
        name: 'Teresa Brito e Faro',
        imgSrc: new URL(
          '/images/members/teresa_brito_e_faro.jpg',
          import.meta.url,
        ).href,
        url: 'https://www.linkedin.com/in/teresabritoefaro',
      },
      {
        name: 'Marta Beleza',
        imgSrc: new URL('/images/members/marta_beleza.jpg', import.meta.url)
          .href,
        url: 'http://linkedin.com/in/marta-beleza-costa-4bb7a61b7',
      },
      {
        name: 'Francisco Lobão Alonso',
        imgSrc: new URL(
          '/images/members/francisco_lobao_alonso.jpg',
          import.meta.url,
        ).href,
        url: 'https://www.linkedin.com/in/francisco-lob%C3%A3o-alonso-20672b244',
      },
      {
        name: 'Marta Diniz',
        imgSrc: new URL('/images/members/marta_diniz.jpg', import.meta.url)
          .href,
        url: 'https://www.linkedin.com/in/a-marta-diniz',
      },
      {
        name: 'Diana Pryshchepova',
        imgSrc: new URL(
          '/images/members/diana_pryshchepova.jpg',
          import.meta.url,
        ).href,
        url: 'https://pt.linkedin.com/in/diana-pryshchepova-96b172301',
      },
      {
        name: 'Duarte Manso',
        imgSrc: new URL('/images/members/duarte_manso.jpg', import.meta.url)
          .href,
        url: 'https://www.linkedin.com/in/duarte-manso-4b599a231',
      },
    ],
  },
  team: {
    title: 'Faculty members',
    members: [
      {
        name: 'Athina Sachoulidou',
        imgSrc: new URL(
          '/images/members/athina_sachoulidou.jpg',
          import.meta.url,
        ).href,
        url: 'https://novalaw.unl.pt/athina-sachoulidou',
      },
      {
        name: 'Claire Bright',
        imgSrc: new URL('/images/members/claire_bright.jpg', import.meta.url)
          .href,
        url: 'https://novalaw.unl.pt/claire-bright',
      },
      {
        name: 'Cristina Nogueira da Silva',
        imgSrc: new URL(
          '/images/members/cristina_nogueira_da_silva.jpg',
          import.meta.url,
        ).href,
        url: 'https://novalaw.unl.pt/cristina-nogueira-da-silva',
      },
      {
        name: 'Francisco Pereira Coutinho',
        imgSrc: new URL(
          '/images/members/francisco_pereira_coutinho.jpg',
          import.meta.url,
        ).href,
        url: 'https://novalaw.unl.pt/francisco-pereira-coutinho',
      },
      {
        name: 'João Zenha Martins',
        imgSrc: new URL(
          '/images/members/joao_zenha_martins.jpg',
          import.meta.url,
        ).href,
        url: 'https://novalaw.unl.pt/joao-zenha-martins',
      },
      {
        name: 'Jorge Morais Carvalho',
        imgSrc: new URL(
          '/images/members/jorge_morais_carvalho.jpg',
          import.meta.url,
        ).href,
        url: 'https://novalaw.unl.pt/jorge-morais-carvalho',
      },
      {
        name: 'Miguel de Azevedo Moura',
        imgSrc: new URL(
          '/images/members/miguel_de_azevedo_moura.jpg',
          import.meta.url,
        ).href,
        url: 'https://novalaw.unl.pt/miguel-de-azevedo-moura',
      },
    ],
  },
  consultor: {
    title: 'Advisory board members',
    members: [
      {
        name: 'Carys Craig',
        imgSrc: new URL('/images/members/carys_craig.jpg', import.meta.url)
          .href,
        url: 'https://www.osgoode.yorku.ca/faculty-and-staff/craig-carys-j',
      },
      {
        name: 'João Pedro Quintais',
        imgSrc: new URL(
          '/images/members/joao_pedro_quintais.jpg',
          import.meta.url,
        ).href,
        url: 'https://www.uva.nl/en/profile/q/u/j.p.quintais/j.p.quintais.html?cb',
      },
      {
        name: 'Marco Scialdone',
        imgSrc: new URL('/images/members/marco_scialdone.jpg', import.meta.url)
          .href,
        url: 'https://www.euroconsumersforum2021.com/xgt_team/marco-scialdone',
      },
      {
        name: 'Pilar Montero',
        imgSrc: new URL('/images/members/pilar_montero.jpg', import.meta.url)
          .href,
        url: 'https://www.linkedin.com/in/pilar-montero-771b06210',
      },
    ],
  },
};
