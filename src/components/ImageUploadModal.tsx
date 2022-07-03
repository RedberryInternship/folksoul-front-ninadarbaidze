import React, { useState, useRef, useContext } from 'react';
import { EditPhoto, Close } from 'components/svgs';
import axios from 'axios';
import AuthContext from 'store/AuthContext';
// export type Data = {
//   imageUrl: string;
//   memberId: string;
//   setImageModalState: any;
// };

export type Image = {
  image: string;
  memberId: string;
};

export type Data = {
  _id: string;
  name: string;
  instrument: string;
  orbitLength: number;
  color: string;
  biography: string;
  image: any;
  fetchData: () => void;
  setImageModalState: any;
  setMemberImage: any;
  memberImage: string;
};

const ImageUploadModal: React.FC<Data> = (props) => {
  const [showSubmitButton, setShowSubmitButton] = useState<any>(false);
  const [imagePreview, setImagePreview] = useState<any>('');
  const fileRef = useRef<any>();
  const authCtx = useContext(AuthContext);

  const [memberImage, setMemberImage] = useState<Image>({
    image: '',
    memberId: '',
  });
  const modalStateHandler = () => {
    props.setImageModalState(false);
  };

  const handlePhoto = (e: any) => {
    setMemberImage({
      ...memberImage,
      image: e.target.files[0],
      memberId: props._id,
    });
    const src = URL.createObjectURL(e.target.files[0]);
    setImagePreview(src);
  };

  const handleImagePreview = () => {
    if (props.image <= 0 && !imagePreview) {
      return 'https://images.vexels.com/media/users/3/129515/isolated/preview/7fb084074c0ee8cfc07d1b9cebcb977f-boy-cartoon-head.png';
    } else if (!imagePreview) {
      return `http://localhost:3000/${props.image[0].imageUrl}`;
    } else {
      return imagePreview;
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    const formData = new FormData();
    formData.append('image', memberImage.image);
    formData.append('memberId', memberImage.memberId);
    // console.log(memberImage);

    try {
      const data = await axios.post(
        'http://localhost:3000/change-avatar',
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      // const response = await data;
      // console.log(data);
    } catch (error: any) {
      throw new Error('Request failed!');
    }
    // props.setMemberImage(response?.image.imageUrl);
    authCtx.refreshMembers();
    props.setImageModalState(false);
  };

  return (
    <>
      <div className='fixed inset-0 z-40 opacity-95 bg-backdrop w-screen h-screen'></div>

      <div className='flex flex-col items-center pt-16  w-[800px] h-[800px] opacity-100 z-50 fixed rounded-lg bg-white top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]'>
        <Close onClick={modalStateHandler} />
        <h1 className='text-2xl'>შეცვალე ჯგუფის წევრის ავატარი</h1>
        <div className='flex flex-col justify-between w-[80%] mb-4 items-center ml-[50%] mr-[50%] border-b-[1px] border-dark50 h-6 '></div>
        <div className='flex flex-col items-center gap-20'>
          <div className='flex flex-col items-center mt-16  w-[30rem]'>
            <div className='flex flex-col justify-center items-center py-16 rounded-full bg-backdrop border-[3px]  mb-6 border-white w-[20rem] h-[20rem] drop-shadow-5xl'>
              <img src={handleImagePreview()} alt='' className='w-[12rem] ' />
            </div>
          </div>
          <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <input
              type='file'
              accept='.png, .jpg, .jpeg'
              name='image'
              ref={fileRef}
              onChange={handlePhoto}
              hidden
            />
            {!showSubmitButton && (
              <button
                onClick={() => {
                  fileRef.current.click();
                  setShowSubmitButton(true);
                }}
                className='w-[250px] h-[60px] rounded-[5px] text-white text-2xl bg-backdrop'
              >
                ატვირთე
              </button>
            )}

            {showSubmitButton && (
              <button
                type='submit'
                className='w-[250px] h-[60px] rounded-[5px] text-white text-2xl bg-green'
              >
                შეინახე
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default ImageUploadModal;
