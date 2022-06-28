import Login from 'pages/Login';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='flex items-center justify-center h-screen w-screen bg-gradient-radial-to-tr  from-grad1 to-grad2'>
      <Routes>
        <Route path='login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
