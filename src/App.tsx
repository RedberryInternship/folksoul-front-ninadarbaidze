import { Login } from 'pages';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='login' element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
