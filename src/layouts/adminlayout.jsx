import React from 'react';
import NavbarAdmin from '../components/adminHead';
import { Outlet } from 'react-router-dom';

export default function AdminLayout() {
  return (
    <>
      <NavbarAdmin />
      <main>
        <Outlet />
      </main>
    </>
  );
}