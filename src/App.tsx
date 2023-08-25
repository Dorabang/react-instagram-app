import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { Outlet, useNavigate } from 'react-router-dom';
import { getItem } from './utils/getSessionStorage';

export interface UserProps {
  email: string;
  password: string;
}

function App() {
  const user: UserProps[] | undefined = getItem('userInfo');

  const navigate = useNavigate();

  useEffect(() => {
    user?.length === 0 && navigate('/login');
  }, [user]);

  return (
    <>
      {user?.length !== 0 && <Header />}
      <Outlet />
    </>
  );
}

export default App;
