import React from 'react';
import { delay } from '@/helpers';

const ChartsPage = async() => {
  await delay(3000);
  
  return (
    <div className='bg-red-400 h-96 rounded-2xl w-1/2 p-10'>
      <h4 className='text-2xl'>Charts</h4>
      <div style={{ width: '280px' }}>
        <iframe
          allow='fullscreen'
          frameBorder='0'
          height='280'
          src='https://giphy.com/embed/KM9Kj1BiS5uMnjVCTF/video'
          width='280'
        ></iframe>
      </div>
    </div>
  );
};

export default ChartsPage;
