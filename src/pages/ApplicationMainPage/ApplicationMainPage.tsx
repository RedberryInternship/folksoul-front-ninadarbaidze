import { BandLogo, sun, memberIcon, youtube } from 'assets';
import { Link } from 'react-router-dom';
import { SocialsTypes, BandMemberTypes } from 'types';
import { Circles } from 'pages/ApplicationMainPage/components';
import { useState, useCallback, useEffect } from 'react';
import {
  getAboutBandInfo,
  getSocialMediaLinks,
  getBandMemebrsWithoutPagination,
} from 'services';

const FrontApplication = () => {
  const [bandLogo, setbandLogo] = useState<string>('');
  const [bandInfo, setbandInfo] = useState<string>('');
  const [socials, setSocials] = useState<SocialsTypes[]>([]);
  const [bandMembers, setBandMembers] = useState<BandMemberTypes[]>([]);
  const [isSpinning, setIsSpinning] = useState<boolean>(true);
  const [memberIsSelected, setMemberIsSelected] = useState<boolean>(true);
  const [selectedMember, setSelectedMemeber] = useState<any>();

  const fetchBand = useCallback(async () => {
    try {
      const response = await getAboutBandInfo();

      setbandLogo(response.data.image[0].imageUrl);
      setbandInfo(response.data.about);
    } catch (error) {}
  }, []);

  const fetchSocials = useCallback(async () => {
    try {
      const response = await getSocialMediaLinks();
      setSocials(response.data);
    } catch (error) {}
  }, []);

  const fetchBandMembers = useCallback(async () => {
    try {
      const response = await getBandMemebrsWithoutPagination();
      setBandMembers(response.data);
    } catch (error) {}
  }, []);

  useEffect(() => {
    fetchBand();
    fetchSocials();
    fetchBandMembers();
  }, [fetchBand, fetchBandMembers, fetchSocials]);

  const manageAppStateHandler = () => {
    setIsSpinning(true);
    setMemberIsSelected(false);
    setSelectedMemeber(null);
  };

  const showMemberIcon = () => {
    if (!selectedMember) {
      return `${process.env.REACT_APP_DOMAIN}/${bandLogo}`;
    } else if (selectedMember.image.length === 0) {
      return memberIcon;
    } else {
      return `${process.env.REACT_APP_DOMAIN}/${selectedMember.image[0].imageUrl}`;
    }
  };

  return (
    <>
      <div className='flex flex-col -z-[99] overflow-clip h-screen w-screen bg-gradient-radial-to-tr  from-grad1 to-grad2'>
        <header className='flex items-center justify-between px-[5%] pt-[1%]'>
          <img src={BandLogo} alt='band-logo' className='w-48 2xl:w-60' />
          <h2 className='text-white text-xl '>
            <Link to={{ pathname: '/login' }}>შესვლა</Link>
          </h2>
        </header>
        <body className='px-[5%] z-50'>
          <div className='flex justify-between mt-[10%]'>
            <div className='w-1/2 overflow-clip flex items-center justify-center'>
              <img
                src={sun}
                onClick={manageAppStateHandler}
                id='sun'
                alt='sun'
                className={`${
                  isSpinning ? 'animate-pulse' : ''
                } inset-0 m-auto right-[50%] px-4 py-4 p-3 w-44 h-44 z-50 cursor-pointer absolute`}
              />
              {bandMembers.map((member) => (
                <Circles
                  key={member._id}
                  size={member.orbitLength}
                  setIsSpinning={setIsSpinning}
                  isSpinning={isSpinning}
                  duration={member.orbitLength / 4}
                  padding={'500px'}
                  memberName={member.name}
                  memberImage={member.image[0] ? member.image[0].imageUrl : ''}
                  memberColor={member.color}
                  onClick={() => setSelectedMemeber(member)}
                  setMemberIsSelected={setMemberIsSelected}
                  memberIsSelected={memberIsSelected}
                />
              ))}
            </div>
            <div className='relative w-1/2 ml-[18%] h-[26rem] 2xl:h-[34rem] bg-yellow rounded-2xl '>
              <div className='absolute bg-grad2 w-5 h-5 top-2 right-2 rounded-full'></div>
              <div className='absolute bg-grad2 w-5 h-5 top-2 left-2 rounded-full'></div>
              <div className='flex flex-col justify-between'>
                <div className='flex justify-center items-center absolute w-[14rem] h-[14rem]  2xl:w-[18rem] 2xl:h-[18rem] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial-to-tr  from-grad1 to-grad2 border-2 border-white drop-shadow-6xl'>
                  <img
                    src={showMemberIcon()}
                    alt='bandLogo'
                    className='max-w-[10rem] 2xl:max-w-[12rem]'
                  />
                </div>
                <div>
                  <p className='h-64 2xl:h-80 mt-32 2xl:mt-48 pr-[6%] scrollbar overflow-y-auto overflow-hidden text-sm 2xl:text-xl mx-[10%] text-justify '>
                    {selectedMember ? selectedMember.biography : bandInfo}
                  </p>
                </div>
                <div className='flex justify-center items-center mt-16 2xl:mt-14 gap-4'>
                  {socials.map((social) => (
                    <a href={social.url} target='_blank' rel='noreferrer'>
                      <img
                        src={
                          social.image.length > 0
                            ? `${process.env.REACT_APP_DOMAIN}/${social.image[0].imageUrl}`
                            : youtube
                        }
                        className='h-[2rem] cursor-pointer'
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
      </div>
    </>
  );
};

export default FrontApplication;
