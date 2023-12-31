// 'use client';
import React from 'react';

import ImageCard from '@/components/imageCard';

const Feeds = async() => {
  const response = await fetch('https://picsum.photos/v2/list?limit=10');
  const data = await response.json();

  return (
    <div className='bg-slate-400 h-96 rounded-2xl w-1/2 p-8 overflow-scroll'>
      <h4 className='text-2xl mb-3'>Image Feeds</h4>
      <div className=''>
          {data.map((el: any) => (
            <ImageCard key={el?.id} author={el?.author} downloadUrl={el?.download_url} />
          ))}
        </div>
    </div>
  );
};

export default Feeds;
