import React from 'react';
import Header from 'components/Header';
import { Navigate, Outlet } from 'react-router-dom';
import getCurrentUser from 'utils/getUserInfo';

export interface UserProps {
  email: string;
  password: string;
}

function App() {
  const currentUser = getCurrentUser();

  if (!currentUser && currentUser === undefined && currentUser === null) {
    return <Navigate to='/' />;
  }
  return (
    <>
      <Header />
      <div className='w-full ml-0 sm:w-[calc(100%_-_72px)] xl:w-[calc(100%_-_335px)] sm:ml-auto flex justify-center pt-4 pb-20'>
        <Outlet />
      </div>
    </>
  );
}

export default App;
