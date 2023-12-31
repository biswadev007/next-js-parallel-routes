import React from 'react';
import Image from 'next/image';

const ImageCard: React.FC<{
  author: string;
  downloadUrl: string;
}> = ({ author, downloadUrl }) => {
  return (
    <div className='flex h-28 w-full mb-2 text-black'>
      <Image src={downloadUrl} alt='dummy' width={100} height={100} />
      <div className='flex flex-col gap-1 p-4'>
        <h6 className='flont-bold text-lg'>{author}</h6>
        <a target='_blank' className='cursor-pointer hover:text-blue-600' href={downloadUrl}>{downloadUrl}</a>
      </div>
    </div>
  );
};

export default ImageCard;
