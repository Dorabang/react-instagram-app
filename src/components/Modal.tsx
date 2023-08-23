import { useSetRecoilState } from 'recoil';
import useOnClickOutside from '../hooks/useOnClickOutside';
import React, { useRef } from 'react';
import { modalOpenState, navState } from '../recoil/atoms';

const Modal = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const setOpen = useSetRecoilState(navState);

  const setModal = useSetRecoilState(modalOpenState);
  useOnClickOutside(ref, () => {
    setModal(false);
    setOpen(false);
  });
  return <div ref={ref}>{children}</div>;
};

export default Modal;
