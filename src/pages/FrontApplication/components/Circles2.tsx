import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import { sun } from 'assets/images';

type CirclesTypes = {
  size: number;
  setIsSpinning: any;
  isSpinning: boolean;
  duration: number;
  padding?: string;
  memberName: string;
  memerImage: string;
  memberColor: string;
};

const Circles: React.FC<CirclesTypes> = (props) => {
  const [scale, setScale] = useState(false);

  const circleVariants = {
    spinning: (i: number) => ({
      rotate: i * 5,
      transition: {
        repeat: Infinity,
        ease: 'linear',
        duration: props.duration,
      },
    }),
    notSpinning: (i: number) => ({
      rotate: 0,
      transition: {
        repeat: Infinity,
        duration: 12147836472,
      },
    }),
    scale: {
      scale: 1.5,
      transition: {
        duration: 0.3,
        yoyo: 10,
      },
    },
  };

  // const onTap = () => {

  return (
    <>
      <div
        className={`inset-0 m-auto right-[50%] z-0 border-yellow2  border-dashed border-[3px] rounded-full border-black absolute  `}
        style={{
          width: `${props.size}px`,
          height: `${props.size}px`,
          // padding: `${props.padding}`,
        }}
      >
        <motion.div
          variants={circleVariants}
          custom={360}
          style={{
            rotate: 0,
            width: `${props.size}px`,
            height: `${props.size}px`,
          }}
          animate={!props.isSpinning ? 'notSpinning' : 'spinning'}
          className={`inset-0 m-auto right-[50%]   rounded-full border-black absolute  `}
        >
          <motion.div
            drag
            dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
            dragElastic={0.7}
            variants={circleVariants}
            custom={-360}
            style={{
              animationPlayState: 'paused',
              backgroundColor: `${props.memberColor}`,
            }}
            className={`${
              scale && !props.isSpinning ? 'w-24 h-24' : 'w-20 h-20'
            } z-50 absolute flex flex-col justify-center items-center top-[20%] border-[5px] border-yellow2  rounded-full`}
            onClick={() => {
              props.setIsSpinning(false);
              setScale(!scale);
            }}
          >
            <img src={`http://localhost:3000/${props.memerImage}`} alt='' />
            <div
              className={`${
                scale && !props.isSpinning ? 'w-28 h-10 top-16' : 'w-24 h-8'
              } flex items-center justify-center z-50  absolute top-12 bg-yellow2 border-[5px] rounded-full`}
              style={{ borderColor: `${props.memberColor}` }}
            >
              <h1 className='text-base'>{props.memberName}</h1>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Circles;
