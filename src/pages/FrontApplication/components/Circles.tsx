// import React, { useState } from 'react';
// // import { motion } from 'framer-motion';
// import './circleAnimation.css';

// type CirclesTypes = {
//   size: string;
//   setIsSpinning: any;
//   isSpinning: boolean;
//   duration: number;
// };

// const Circles: React.FC<CirclesTypes> = (props) => {
//   // const [scale, setScale] = useState(false);
//   const [stop, setStop] = useState(false);
//   let x;
//   return (
//     <>
//       {/* <div
//         className={`inset-0 m-auto right-[50%] border-yellow2  border-dashed border-[1px] rounded-full border-black absolute  `}
//         style={{ width: `${props.size}`, height: `${props.size}` }}
//       > */}
//       <div
//         style={{ padding: `${props.size}px` }}
//         className=' block h-[140px] w-[140px] border-dashed border-yellow2  border-2 rounded-full border-black absolute left-[49%] top-[47%]  '
//       >
//         <div
//           className={stop ? 'mercury paused' : 'mercury running'}
//           // style={stop ? 'paused' : 'running'}
//         ></div>
//       </div>
//       {/* </div> */}
//     </>
//   );
// };

// export default Circles;
