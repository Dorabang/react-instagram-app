import React from 'react';

const Heading = ({ title }: { title: string }) => {
  return (
    <div
      className='
      text-2xl
      font-bold
      pt-2
      pb-7
      pl-6
      my-2
      '
    >
      {title}
    </div>
  );
};

export default Heading;
