import React from 'react';
import Heading from '../components/Heading';
import image from '../assets/undraw_coding_joxb.svg';

export default function Start() {
  return (
    <>
      <img src={image} className='w-1/5 mx-auto' alt="" />
      <Heading text={'START FRAMEWORK'} />
    </>
  );
}
