import { BandLogo, sun } from 'assets/images';
import { Link } from 'react-router-dom';
import { SocialsTypes, BandMemberTypes } from 'components';
import { Circles2 } from 'pages/FrontApplication/components';
import { useState, useCallback, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from 'store';

const FrontApplication = () => {
  const [bandLogo, setbandLogo] = useState<string>('');
  const [socials, setSocials] = useState<SocialsTypes[]>([]);
  const [bandMembers, setBandMembers] = useState<BandMemberTypes[]>([]);
  const [isSpinning, setIsSpinning] = useState<boolean>(true);
  const [memberIsSelected, setMemberIsSelected] = useState<boolean>(true);
  const [selectedMember, setSelectedMemeber] = useState<any>();
  const ctx = useContext(AuthContext);

  const fetchData = useCallback(async () => {
    try {
      const aboutBandResponse = await axios.get(`http://localhost:3000/bands`);
      const aboutSocialsResponse = await axios.get(
        `http://localhost:3000/social-media`
      );
      const members = await axios.get(`http://localhost:3000/band-members`);
      setbandLogo(aboutBandResponse.data.image[0].imageUrl);
      setSocials(aboutSocialsResponse.data);
      setBandMembers(members.data);
    } catch (error: any) {}
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const manageAppStateHandler = () => {
    setIsSpinning(true);
    setMemberIsSelected(false);
    setSelectedMemeber(null);
    ctx.scaleHandler();
  };

  return (
    <>
      <div className='flex z-[-99] gap-20 absolute h-screen w-screen bg-gradient-radial-to-tr  from-grad1 to-grad2'></div>
      <header className='flex items-center justify-between px-[5%] pt-[1%]'>
        <img src={BandLogo} alt='band-logo' className=' w-60 ' />
        <h2 className='text-white text-xl '>
          <Link to={{ pathname: '/login' }}>შესვლა</Link>
        </h2>
      </header>
      <body className='px-[5%]'>
        <div className='flex justify-between mt-[10%]'>
          <div className='w-1/2 flex items-center  justify-center'>
            <img
              src={sun}
              onClick={manageAppStateHandler}
              alt='sun'
              className={`${
                isSpinning ? 'animate-pulse' : ''
              } inset-0 m-auto right-[50%] px-4 py-4 p-3 w-44 h-44 z-50 cursor-pointer absolute`}
            />
            {bandMembers.map((member) => (
              <Circles2
                key={member._id}
                size={member.orbitLength}
                setIsSpinning={setIsSpinning}
                isSpinning={isSpinning}
                duration={member.orbitLength / 4}
                padding={'500px'}
                memberName={member.name}
                memerImage={member.image[0].imageUrl}
                memberColor={member.color}
                onClick={() => setSelectedMemeber(member)}
                setMemberIsSelected={setMemberIsSelected}
                memberIsSelected={memberIsSelected}
              />
            ))}
          </div>
          <div className='relative w-[35%] h-[610px] bg-yellow rounded-2xl '>
            <div className='absolute bg-grad2 w-5 h-5 top-2 right-2 rounded-full'></div>
            <div className='absolute bg-grad2 w-5 h-5 top-2 left-2 rounded-full'></div>
            <div className='flex flex-col justify-between'>
              <div className='flex justify-center items-center absolute w-[300px] h-[300px] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial-to-tr  from-grad1 to-grad2 border-2 border-white drop-shadow-6xl'>
                <img
                  src={
                    !selectedMember
                      ? `http://localhost:3000/${bandLogo}`
                      : `http://localhost:3000/${selectedMember.image[0].imageUrl}`
                  }
                  alt='bandLogo'
                  className='max-w-[12rem]'
                />
              </div>
              <div className=''>
                <p className=' mt-48 text-xl mx-[10%] overflow-auto h-[400px] text-justify '>
                  {selectedMember
                    ? selectedMember.biography
                    : ` დაწყვილების პერიოდი ზომიერ და არქტიკულ რეგიონებში მობინადრე
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
                  ბარბაცით გამოდიან ბუნაგიდან`}
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
