import React from 'react';

const defaultCharts = () => {
  return (
    <>
      <h4 className='text-2xl'>This is default page style</h4>
      <div style={{ width: '480px' }}>
        <iframe
          src='https://giphy.com/embed/1AegEyocFc6bnQ2UoC'
          width='480'
          height='480'
          frameBorder='0'
          className='giphy-embed'
          allowFullScreen
        ></iframe>
        <p>
          <a href='https://giphy.com/gifs/bear-ketakuma-takadabear-1AegEyocFc6bnQ2UoC'>
            via GIPHY
          </a>
        </p>
      </div>
    </>
  );
};

export default defaultCharts;
