
import {forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal, } from 'react-dom';
import {IconX} from "@tabler/icons-react";

interface ModalProps {
    children: React.ReactNode;
}

const Modal=forwardRef(function Dialog({children}: ModalProps, ref) {
    const modalRef = useRef<HTMLDialogElement>(null)
    useImperativeHandle(ref, () => ({
        open: () => {
            modalRef.current?.showModal()
            console.log('open')
        },
        close: () => {
            modalRef.current?.close()
            console.log('close')
        }
    }), [])
  return createPortal(
    <dialog ref={modalRef} className="modal bg-transparent p-4">
        <button
          onClick={() => modalRef.current?.close()}
          className="absolute top-1 right-0  bg-lime-400 text-gray-600 rounded-full hover:bg-gray-300 hover:text-gray-800"
        >
            <IconX size={20} />
        </button>
        {children}
        <div className="content">
            <button onClick={() => modalRef.current?.close()}>Close</button>
        </div>
    </dialog>,
    document.getElementById('modal') as HTMLElement
  )
})
export default Modal;
