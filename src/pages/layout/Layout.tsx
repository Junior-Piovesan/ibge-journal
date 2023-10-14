import { Outlet } from 'react-router-dom';
import Hearder from '../../components/header/Hearder';
import Filters from '../../components/Filters/Filters';
import Footer from '../../components/footer/Footer';

export default function Layout() {
  return (
    <>
      <Hearder />
      <Filters />
      <Outlet />
      <Footer />
    </>
  );
}
