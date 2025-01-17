import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { useSearchParams } from 'react-router-dom';
import { Dialog } from '../Dialog';
import { Spinner } from '../Spinner';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export const Syllabus = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const modalQuery = searchParams.get('modal') === 'syllabus';

  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const scale = getScale();

  const handleOpenModal = () => {
    setSearchParams('modal=syllabus');
  };

  const handleCloseModal = () => {
    setSearchParams();
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const changePage = (offset: number) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  return (
    <>
      <button
        type='button'
        onClick={handleOpenModal}
        className='mx-auto md:mr-0 mt-2 w-fit p-3 rounded-3xl bg-blue-700 text-white font-semibold hover:scale-105 transition'
      >
        <span>See the syllabus here</span>
      </button>

      <Dialog open={!!modalQuery} onClose={handleCloseModal}>
        <div className='max-w-[90%] w-full overflow-hidden self-center'>
          <Document
            file={'./SINPL-EU_syllabus_2025.pdf'}
            loading={Spinner}
            onLoadSuccess={onDocumentLoadSuccess}
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
              onClick={previousPage}
              className='min-w-24 flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-blue-700 rounded-s hover:cursor-pointer hover:brightness-110 disabled:hover:brightness-100 disabled:grayscale disabled:opacity-35'
            >
              Previous
            </button>

            <button
              type='button'
              disabled={pageNumber >= numPages}
              onClick={nextPage}
              className='min-w-24 flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-blue-700 border-0 border-s border-slate-800 rounded-e hover:cursor-pointer hover:brightness-110 disabled:hover:brightness-100 disabled:grayscale disabled:opacity-35'
            >
              Next
            </button>
          </div>
        </div>
      </Dialog>
    </>
  );
};

const getScale = () => {
  const width = window.innerWidth;

  if (width < 600) return 0.55;
  if (width < 768) return 1;
  if (width < 980) return 0.8;

  return 1.2;
};
