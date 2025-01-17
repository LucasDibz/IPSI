import { XCircle } from 'lucide-react';
import { type ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  anchor?: 'top' | 'right' | 'bottom' | 'left';
};
export const Dialog = ({
  children,
  open,
  onClose,
  anchor = 'right',
}: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
      return;
    }

    dialogRef.current?.close();
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return createPortal(
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <dialog
      className='inset-0 fixed overscroll-contain border-none rounded-l-lg data-[anchor=right]:mr-0 z-50 h-full max-w-full w-full mt-0 md:mt-auto md:w-7/12 overflow-y-auto bg-white shadow backdrop:bg-background backdrop:opacity-75 transition-transform [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] open:animate-slide-in animate-slide-out'
      ref={dialogRef}
      onClick={(event) => event.currentTarget === event.target && onClose()}
      onCancel={onClose}
      data-anchor={anchor}
    >
      <button
        type='button'
        onClick={onClose}
        className='hover:cursor-pointer absolute z-50 left-2 top-2 text-slate-400 hover:text-slate-500'
      >
        <XCircle className='bg-slate-200 rounded-full flex-shrink-0' />
      </button>

      <div className='flex flex-col gap-5'>{children}</div>
    </dialog>,
    document.body,
  );
};
