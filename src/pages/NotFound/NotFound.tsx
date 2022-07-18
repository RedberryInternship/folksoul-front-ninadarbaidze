import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='flex flex-col justify-center items-center gap-12 overflow-clip  h-screen w-screen bg-gradient-radial-to-tr  from-grad1 to-grad2'>
        <h1 className=' text-9xl text-white font-extrabold'>404</h1>
        <p className=' text-2xl text-white font-extrabold'>
          სამწუხაროდ გვერდი ვერ მოიძებნა
        </p>
        <button
          className=' text-link text-base 2xl:text-2xl font-bold underline '
          onClick={() => navigate('/')}
          id='goBackToMainBtn'
        >
          დაბრუნდი მთავარ გვერდზე
        </button>
      </div>
    </>
  );
};

export default NotFound;
