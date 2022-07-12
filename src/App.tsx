import { useContext } from 'react';
import {
  Login,
  Dashboard,
  Main,
  BandMember,
  AboutBand,
  Socials,
  NewMember,
  NewSocial,
  EditBand,
  ApplicationMainPage,
  NotFound,
} from 'pages';
import { Routes, Route, Navigate } from 'react-router-dom';

import AuthContext from 'store/AuthContext';

const App = () => {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <Routes>
        <Route path='/' element={<ApplicationMainPage />} />
        <Route
          path='login'
          element={
            authCtx.isLoggedIn ? (
              <Navigate replace to='/dashboard/main' />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path='dashboard'
          element={
            authCtx.isLoggedIn ? (
              <Dashboard />
            ) : (
              <Navigate replace to='/login' />
            )
          }
        >
          <Route path='main' element={<Main />} />

          <Route path='band-members' element={<BandMember />}>
            <Route path='new-member' element={<NewMember />} />
          </Route>
          <Route path='socials' element={<Socials />}>
            <Route path='new-social' element={<NewSocial />} />
          </Route>
          <Route path='about-band' element={<AboutBand />}>
            <Route path='edit-band' element={<EditBand />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
