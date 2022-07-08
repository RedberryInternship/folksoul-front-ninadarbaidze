// import { useRef } from 'react';

// type ImageUploadFormTypes = {
//   onSubmit: () => any;
//   onChange: () => void;
// };

// const ImageUploadModalForm = () => {
//   const fileRef = useRef<any>();

//   return (
//     <div>
//       <form onSubmit={props.onSubmit} encType='multipart/form-data'>
//         <input
//           type='file'
//           accept='.png, .jpg, .jpeg'
//           name='image'
//           ref={fileRef}
//           onChange={props.onChange}
//           hidden
//         />
//         {!showSubmitButton && (
//           <button
//             onClick={() => {
//               fileRef.current!.click();
//               setShowSubmitButton(true);
//             }}
//             className='w-[150px] h-[50px] 2xl:w-[250px] 2xl:h-[60px] rounded-[5px] text-white text-base 2xl:text-2xl bg-backdrop'
//           >
//             ატვირთე
//           </button>
//         )}

//         {showSubmitButton && (
//           <button
//             type='submit'
//             className='w-[150px] h-[50px] 2xl:w-[250px] 2xl:h-[60px] rounded-[5px] text-white text-base 2xl:text-2xl bg-green'
//           >
//             შეინახე
//           </button>
//         )}
//       </form>
//     </div>
//   );
// };

// export default ImageUploadModalForm;
import React from 'react';

const ImageUploadModalForm = () => {
  return <div></div>;
};

export default ImageUploadModalForm;
