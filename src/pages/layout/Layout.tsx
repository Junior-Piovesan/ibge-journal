import { Outlet } from 'react-router-dom';
import Hearder from '../../components/header/Hearder';

export default function Layout() {
  return (
    <>
      <Hearder />
      <Outlet />
    </>
  );
}
