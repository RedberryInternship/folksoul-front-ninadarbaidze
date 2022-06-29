import { useState, useContext } from 'react';
import { Login, Dashboard } from 'pages';
import { Routes, Route, Navigate } from 'react-router-dom';

import AuthContext from 'store/AuthContext';

const App = () => {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route
          path='dashoboard'
          element={
            authCtx.isLoggedIn ? (
              <Dashboard />
            ) : (
              <Navigate replace to='/login' />
            )
          }
        ></Route>
      </Routes>
    </>
  );
};

export default App;
