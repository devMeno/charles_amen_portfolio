import React from 'react';
import Title from '../components/Title';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className={'w-full h-full flex flex-col gap-4'}>
      <Navbar />
      <Title />
     </div>
  );
}
