import { Route, Routes as RT, useLocation } from 'react-router-dom';

import Home from '@/screen/Home';

const Routes = () => {
  const location = useLocation();
  return (
    <RT location={location} key={location.pathname}>
      <Route element={<Home />} path="/" />
    </RT>
  );
}

export default Routes;