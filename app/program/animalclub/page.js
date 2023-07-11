import React from "react";
import style from './animal.module.css';
import Image from 'next/image';
const Animal = () => {
  return (
    <>
    <div className={style.lilyLearning}>
      <Image src='/giraffehead.png' width={100} height={80} />
      <h1>Animal Club</h1>
      <Image src='/Giraffe.png' width={100} height={100} />
      
    </div>
      <p>
        I am so happy to start a Animal Club to help kids learn more and more about animals every day!
      </p>
    </>
  );
};

export default Animal;
