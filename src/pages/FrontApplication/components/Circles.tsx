import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { memberIcon } from 'assets/images';
import { CirclesTypes } from 'components';

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
  };

  const seTScaleToFalse = () => {
    if (props.isSpinning) setScale(false);
  };

  useEffect(() => {
    seTScaleToFalse();
  }, [props.isSpinning]);

  return (
    <>
      <div
        className={`inset-0 m-auto right-[50%] z-[-98] border-yellow2  border-dashed border-[3px] rounded-full border-black absolute  `}
        style={{
          width: `${props.size}px`,
          height: `${props.size}px`,
        }}
      ></div>
      <motion.div
        variants={circleVariants}
        custom={360}
        style={{
          rotate: 0,
          width: `${props.size}px`,
          height: `${props.size}px`,
        }}
        animate={!props.isSpinning ? 'notSpinning' : 'spinning'}
        className={`inset-0 m-auto right-[50%]  rounded-full border-black absolute  `}
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
            scale && !props.isSpinning && props.memberIsSelected
              ? 'w-24 h-24'
              : 'w-20 h-20'
          } z-50 absolute flex flex-col justify-center items-center top-[20%] border-[5px] border-yellow2  rounded-full`}
          onClick={() => {
            props.onClick();
            props.setIsSpinning(false);
            setScale(true);
            props.setMemberIsSelected(true);
          }}
        >
          <img
            src={
              props.memberImage
                ? `http://localhost:3000/${props.memberImage}`
                : memberIcon
            }
            alt='membericon'
            className='w-16'
          />
          <div
            className={`${
              scale && !props.isSpinning && props.memberIsSelected
                ? 'w-28 h-10 top-16'
                : 'w-24 h-8'
            } flex items-center justify-center z-50  absolute top-16 bg-yellow2 border-[5px] rounded-full`}
            style={{ borderColor: `${props.memberColor}` }}
          >
            <h1 className='text-base'>{props.memberName}</h1>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Circles;
