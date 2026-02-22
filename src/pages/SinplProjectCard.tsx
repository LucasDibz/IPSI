import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { Dialog, Spinner } from '../components';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

type Props = {
  imageSrc?: string;
  pdfFile?: string;
};

const getScale = () => {
  const width = window.innerWidth;
  if (width < 600) return 0.55;
  if (width < 768) return 1;
  if (width < 980) return 0.8;
  return 1.2;
};

export function SinplProjectCard({ imageSrc, pdfFile }: Props) {
  const [open, setOpen] = useState(false);
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const scale = getScale();

  return (
    <>
      <div className='xl:flex gap-4'>
        <div className='xl:w-1/2 rounded-lg shadow hover:shadow-lg transition overflow-hidden'>
          <img
            src={imageSrc ?? './images/ipsi-draw-inverted.jpeg'}
            alt='Project'
            className='object-cover w-full h-full'
            width={400}
            height={555}
          />
        </div>
        <div className='xl:w-1/2 flex mt-2 xl:mt-0 justify-center items-center overflow-hidden'>
          {pdfFile ? (
            <button
              type='button'
              onClick={() => { setOpen(true); setPageNumber(1); }}
              className='group relative w-full h-full overflow-hidden rounded-lg shadow hover:shadow-lg transition cursor-pointer border border-slate-200'
            >
              <Document
                file={pdfFile}
                loading={<div className='w-48 h-64 flex items-center justify-center'><Spinner /></div>}
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
      </div>

      {pdfFile && (
        <Dialog open={open} onClose={() => setOpen(false)}>
          <div className='max-w-[90%] w-full overflow-hidden self-center'>
            <Document
              file={pdfFile}
              loading={Spinner}
              onLoadSuccess={({ numPages }) => { setNumPages(numPages); setPageNumber(1); }}
              className='select-none'
            >
              <Page pageNumber={pageNumber} scale={scale} />
            </Document>
          </div>
          <div className='flex flex-col items-center w-fit mx-auto mb-20'>
            <span className='text-xs leading-none text-slate-500 italic'>
              Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
            </span>
            <div className='inline-flex mt-2 xs:mt-0'>
              <button
                type='button'
                disabled={pageNumber <= 1}
                onClick={() => setPageNumber((p) => p - 1)}
                className='min-w-24 flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-blue-700 rounded-s hover:cursor-pointer hover:brightness-110 disabled:hover:brightness-100 disabled:grayscale disabled:opacity-35'
              >
                Previous
              </button>
              <button
                type='button'
                disabled={pageNumber >= numPages}
                onClick={() => setPageNumber((p) => p + 1)}
                className='min-w-24 flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-blue-700 border-0 border-s border-slate-800 rounded-e hover:cursor-pointer hover:brightness-110 disabled:hover:brightness-100 disabled:grayscale disabled:opacity-35'
              >
                Next
              </button>
            </div>
          </div>
        </Dialog>
      )}
    </>
  );
}
