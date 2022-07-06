import { BandLogo } from 'assets/images';
import { Link } from 'react-router-dom';
import { SocialsTypes } from 'components';
import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

const FrontApplication = () => {
  const [bandLogo, setbandLogo] = useState<string>('');
  const [socials, setSocials] = useState<SocialsTypes[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const aboutBandResponse = await axios.get(`http://localhost:3000/bands`);
      const aboutSocialsResponse = await axios.get(
        `http://localhost:3000/social-media`
      );
      setbandLogo(aboutBandResponse.data.image[0].imageUrl);
      setSocials(aboutSocialsResponse.data);
    } catch (error: any) {}
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <div className='flex gap-20 absolute z-[-1] h-screen w-screen bg-gradient-radial-to-tr  from-grad1 to-grad2'></div>

      <header className='flex items-center justify-between px-[5%] pt-[1%]'>
        <img src={BandLogo} alt='band-logo' className=' w-60 ' />
        <h2 className='text-white text-xl '>
          <Link to={{ pathname: '/login' }}>შესვლა</Link>
        </h2>
      </header>
      <body>
        <div className='flex mt-[10%]'>
          <div className='w-[60%] bg-white '></div>
          <div className='relative w-[30%] h-[610px] bg-yellow rounded-2xl '>
            <div className='absolute bg-grad2 w-5 h-5 top-2 right-2 rounded-full'></div>
            <div className='absolute bg-grad2 w-5 h-5 top-2 left-2 rounded-full'></div>
            <div className='flex flex-col justify-between'>
              <div className='flex justify-center items-center absolute w-[300px] h-[300px] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial-to-tr  from-grad1 to-grad2 border-2 border-white drop-shadow-6xl'>
                <img
                  src={
                    bandLogo ? `http://localhost:3000/${bandLogo}` : BandLogo
                  }
                  alt='bandLogo'
                  className='max-w-[18rem]'
                />
              </div>
              <div className=''>
                <p className=' mt-48 text-xl mx-[10%] overflow-auto h-[400px] text-justify '>
                  დაწყვილების პერიოდი ზომიერ და არქტიკულ რეგიონებში მობინადრე
                  დათვებისთვის, ჩვეულებრივ, გაზაფხულია. მაკეობა ხანმოკლეა, თუმცა
                  იმის გამო, რომ დათვი არ მშობიარობს მანამ, სანამ ზამთრის შუა
                  ძილში არ იქნება, განაყოფიერებული კვერცხუჯრედის საშვილოსნოში
                  იმპლანტაცია ხდება მხოლოდ ოქტომბე-ნოემბერში, ამ პროცესს
                  „დაგვიანებული იმპლანტაცია“ ეწოდება. დათვი შობს წარმოუდგენლად
                  პატარა ბელებს, ხშირ შემთხვევაში — ორს. ახალშობილები მხოლოდ
                  200-700 გრამს იწონიან და ძალიან ჰგვანან პატარა ვირთხებს. ისინი
                  თვალაუხელელნი, უკბილონი და ბეწვის გარეშე იბადებიან. პატარები
                  რჩებიან რა ბუნაგში დედასთან, მისი ნოყიერი რძით იკვებებიან და
                  სწრაფად იზრდებიან. როდესაც გაზაფხულზე ისინი ბარბაცით გამოდიან
                  ბუნაგიდან200-700 გრამს იწონიან და ძალიან ჰგვანან პატარა
                  ვირთხებს. ისინი თვალაუხელელნი, უკბილონი და ბეწვის გარეშე
                  იბადებიან. პატარები რჩებიან რა ბუნაგში დედასთან, მისი ნოყიერი
                  რძით იკვებებიან და სწრაფად იზრდებიან. როდესაც გაზაფხულზე ისინი
                  ბარბაცით გამოდიან ბუნაგიდან
                </p>
              </div>
              <div className='flex justify-center items-center mt-10 gap-4'>
                {socials.map((social) => (
                  <a href={social.url} target='_blank' rel='noreferrer'>
                    <img
                      src={`http://localhost:3000/${social.image[0].imageUrl}`}
                      className='max-h-[3rem] cursor-pointer'
                      alt='social-icon'
                      key={social._id}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default FrontApplication;
