import React from 'react';
import code from './img/code.png';
import me from './img/me.jpg';
import mixer from './img/alan desk.jpg';
import script from './img/script.jpg';
import harness from './img/harness.jpg';
import tpi from './img/tpi awards.jpg';
import bike from './img/motorbike.jpg';
import mrsB from './img/mrsB.jpg';

const Gallery = (props) => {
  return (
    <div className='gallery'>
      <div className='scrolling-wrapper'>
        <div className='card'>
          {' '}
          <img src={me} alt='alan harrison' />{' '}
        </div>
        <div className='card'>
          {' '}
          <img src={code} alt='some code' />{' '}
        </div>

        <div className='card'>
          {' '}
          <img src={mixer} alt='alan working with sound mixer' />{' '}
        </div>
        <div className='card'>
          {' '}
          <img src={script} alt='large pop concert alan worked on' />{' '}
        </div>
        <div className='card'>
          {' '}
          <img src={harness} alt='alan in climbing harness' />{' '}
        </div>
        <div className='card'>
          {' '}
          <img src={tpi} alt='award won by adlib audio' />{' '}
        </div>
        <div className='card'>
          {' '}
          <img src={bike} alt='alans motorbike' />{' '}
        </div>
        <div className='card'>
          {' '}
          <img src={mrsB} alt='grumpy alan on a gig' />{' '}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
