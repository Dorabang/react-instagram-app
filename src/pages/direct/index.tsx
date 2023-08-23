import { navState } from '../../recoil/atoms';
import { useRecoilState } from 'recoil';
import React, { useEffect } from 'react';

const DirectPage = () => {
  const [open, setOpen] = useRecoilState(navState);
  return <div>DirectPage</div>;
};

export default DirectPage;
