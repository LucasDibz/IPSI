import { BookText } from 'lucide-react';

export function Main() {
  return (
    <main className='relative container mx-auto px-4 md:px-0 pt-20 grid gap-10'>
      <div className='max-w-3xl xl:max-w-5xl'>
        <h2 className='text-xl leading-5 text-red-600 font-semibold'>
          Knowledge Center
        </h2>
        <h1 className='mt-3 md:text-justify text-3xl leading-6 text-slate-400 '>
          NOVA Knowledge Centre on Intellectual Property & Sustainable
          Innovation (IPSI)
        </h1>

        <img
          className='w-28 h-28 top-0 lg:top-auto lg:w-64 lg:h-64 xl:h-96 xl:w-96 absolute right-0 z-0'
          src='https://novalaw.unl.pt/wp-content/uploads/2022/09/IPSI_Imagem_Site_Forma_Fluida.jpg'
          alt='IPSI Logo'
          loading='lazy'
        />
      </div>

      <section className='z-10 grid gap-5 max-w-3xl xl:max-w-4xl md:text-justify'>
        <p>
          O{' '}
          <strong>
            NOVA Knowledge Centre on Intellectual Property & Sustainable
            Innovation (IPSI){' '}
          </strong>
          dedica-se ao estudo e à investigação do conceito jurídico,
          regulamentação e evolução da Propriedade Intelectual, numa sociedade
          que visa atingir a sustentabilidade.
        </p>

        <article>
          <span>
            O <strong>NOVA IPSI</strong> tem como objetivos:
          </span>
          <ul className='list-disc list-inside grid gap-3'>
            <li>
              Colocar estudantes e investigadores em início de carreira em
              contacto com as questões jurídicas relacionadas com{' '}
              <strong>
                incentivos sustentáveis e proporcionar-lhes acesso a
                Conhecimento, Tecnologia e Cultura;
              </strong>
            </li>

            <li>
              Permitir aos/às investigadores/as seniores e membros do corpo
              docente da NOVA e de outras instituições avançar com a sua
              investigação e transformá-la em{' '}
              <strong>
                educação e consultadoria jurídica, aconselhamento político e
                contencioso estratégico
              </strong>
            </li>

            <li>
              Criar oportunidades de diálogo e de desenvolvimento conjunto de
              projetos{' '}
              <strong>entre os investigadores e os stakeholders.</strong>
            </li>
          </ul>
        </article>
      </section>

      <article className='z-10 flex items-center gap-5 max-w-xs'>
        <BookText size={48} color='darkgray' />

        <div className='flex flex-col gap-2'>
          <h2 className='text-lg leading-5 font-semibold'>
            NOVA IPSI Booklet 2023
          </h2>
          <a
            href='/'
            className='text-xl text-red-600 underline leading-6 font-semibold w-fit hover:brightness-75 hover:scale-105 transition'
          >
            Download
          </a>
        </div>
      </article>
    </main>
  );
}
