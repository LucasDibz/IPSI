import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { Dialog } from '../Dialog';
import { Spinner } from '../Spinner';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export const Syllabus = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const closeModal = () => {
    setIsOpen(false);
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
        className='mx-auto md:mr-0 mt-2 w-fit p-3 rounded-3xl bg-blue-700 text-white font-semibold hover:scale-105 transition'
      >
        <span>See the syllabus here</span>
      </button>

      <Dialog open={true} onClose={closeModal}>
        <Document
          file={'./SINPL-EU_syllabus_2025.pdf'}
          loading={Spinner}
          onLoadSuccess={onDocumentLoadSuccess}
          className='select-none'
        >
          <Page pageNumber={pageNumber} />
        </Document>

        <div>
          <button
            type='button'
            disabled={pageNumber <= 1}
            onClick={previousPage}
          >
            Previous
          </button>
          <button
            type='button'
            disabled={pageNumber >= numPages}
            onClick={nextPage}
          >
            Next
          </button>
          <span>
            Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
          </span>
        </div>
      </Dialog>
    </>
  );
};
