import { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { Card, Dialog, Spinner } from '../';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

type Project = {
  title: string;
  label?: string;
  imageSrc?: string;
  pdfFile?: string;
  download?: { title: string; file: string };
};

type Props = { project: Project };

export function SinplProjectCard({
  project: { label, title, imageSrc, pdfFile, download },
}: Props) {
  const [open, setOpen] = useState(false);
  const [numPages, setNumPages] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [pageWidth, setPageWidth] = useState(300);

  useEffect(() => {
    if (!open) return;
    const raf = requestAnimationFrame(() => {
      if (containerRef.current) {
        setPageWidth(containerRef.current.clientWidth);
      }
    });
    return () => cancelAnimationFrame(raf);
  }, [open]);

  return (
    <Card className='bg-white rounded-[3rem] max-w-full'>
      <Card.Title className='text-xl font-bold text-heading'>
        {title}
      </Card.Title>
      <Card.Content>
        <div className='md:flex-row flex-col flex justify-center gap-6'>
          <div className='md:w-1/2 flex mt-2 md:mt-0 justify-center items-center overflow-hidden'>
            {pdfFile ? (
              <button
                type='button'
                onClick={() => setOpen(true)}
                className='group relative w-full h-full overflow-hidden rounded-lg shadow hover:shadow-lg transition cursor-pointer border border-slate-200'
              >
                <Document
                  file={pdfFile}
                  loading={
                    <div className='w-48 h-64 flex items-center justify-center'>
                      <Spinner />
                    </div>
                  }
                  className='flex items-center justify-center h-full'
                >
                  <Page pageNumber={1} scale={0.4} />
                </Document>
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition' />
              </button>
            ) : (
              <span className='text-sm text-slate-400 italic'>Coming soon</span>
            )}
          </div>

          {imageSrc && (
            <div className='md:w-1/2 rounded-lg shadow hover:shadow-lg transition overflow-hidden'>
              <img
                src={imageSrc}
                alt='Project'
                className='w-full h-auto'
                width={400}
                height={555}
              />
            </div>
          )}

          {download && (
            <div className='md:w-1/2 flex flex-col mt-2 md:mt-0 justify-center items-center gap-2 overflow-hidden'>
              <a
                href={download.file}
                download
                className='group relative w-full h-full overflow-hidden rounded-lg shadow hover:shadow-lg transition cursor-pointer border border-slate-200'
              >
                <Document
                  file={download.file}
                  loading={
                    <div className='w-48 h-64 flex items-center justify-center'>
                      <Spinner />
                    </div>
                  }
                  className='flex items-center justify-center h-full'
                >
                  <Page pageNumber={1} scale={0.4} />
                </Document>
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition' />
              </a>
              <a
                href={download.file}
                download
                className='w-fit px-3 py-2 text-center text-white border border-slate-400 bg-heading rounded-lg hover:brightness-90'
              >
                Download here the <br /> {download.title}
              </a>
            </div>
          )}
        </div>

        {pdfFile && (
          <Dialog open={open} onClose={() => setOpen(false)}>
            <div
              ref={containerRef}
              className='max-w-[90%] w-full overflow-hidden self-center'
            >
              <Document
                file={pdfFile}
                loading={Spinner}
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                className='select-none flex flex-col gap-2'
              >
                {Array.from({ length: numPages }, (_, i) => (
                  <Page key={i + 1} pageNumber={i + 1} width={pageWidth} />
                ))}
              </Document>
            </div>
          </Dialog>
        )}

        <p className='font-semibold text-heading mt-4 text-center'>{label}</p>
      </Card.Content>
    </Card>
  );
}
