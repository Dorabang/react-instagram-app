import React from 'react';

const Container = ({
  children,
  classAdd,
}: {
  children?: React.ReactNode;
  classAdd?: string;
}) => {
  return (
    <div
      className={`
  container mx-auto
  ${classAdd}
  `}
    >
      {children}
    </div>
  );
};

export default Container;
