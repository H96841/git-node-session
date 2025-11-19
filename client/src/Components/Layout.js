import { Navigate, Outlet } from 'react-router-dom';
import Navigate1 from './Navigate';


const Layout = () => {
  return (
   <>
      <Navigate1></Navigate1>
      <main className="content">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;