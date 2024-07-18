import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { BasicLayout } from '../layouts/BasicLayout';
import { TransporteDisposicionPage } from '../pages/services/TransporteDisposicionPage';
import { HomePage } from '../pages/HomePage';
import { ErrorPage } from '../pages/ErrorPage';
import { UsPage } from '../pages/UsPage';
import { Staff } from '../pages/Staff';
import { ContactUs } from '../pages/ContactUs';
import { Loading } from '../components/Loading/Loading';
import { ComercializacionResiduosPage } from '../pages/services/ComercializacionResiduosPage';
import { DestruccionResiduosPage } from '../pages/services/DestruccionResiduosPage';

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<BasicLayout />}>
      <Route index element={<HomePage />} />
      <Route path="nosotros" element={<UsPage />} />
      <Route path="staff" element={<Staff />} />
      <Route path="contactanos" element={<ContactUs />} />
      <Route path="transporte-disposicion-final" element={<TransporteDisposicionPage />} />
      <Route path="comercializacion-residuos" element={<ComercializacionResiduosPage />} />
      <Route path="destruccion-residuos-solidos" element={<DestruccionResiduosPage />} />
      <Route path="loading" element={<Loading />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  </Routes>
)

