import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, NavBar } from '../components';

export default function Root() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
