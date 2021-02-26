import React, { useEffect } from 'react';

const Quals = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className='flex-container'>
      <div className='bio'>
        <div className='paragraph-header'>
          <p>Qualifications</p>
        </div>
        <div class='skills'>
          <h4>Educational</h4>
          <ul id='qualslist'>
            <li>10 GCSE's A*-B</li>
            <li>3 A-Levels A-B</li>
            <li>Audio Engineering from SSR Manchester</li>
            <li>Web Development Bootcamp from Northcoders</li>
          </ul>
        </div>
        <div class='skills'>
          <h4>Vocational Training</h4>
          <ul id='qualslist'>
            <li>Code Academy Javascript, HTML and CSS basics </li>
            <li>Audinate Dante Level 3</li>
            <li>L-Acoustics K Systems Engineer</li>
            <li>Coda Audio Systems Engineer</li>
            <li>Digico Consoles</li>
            <li>Digidesign Consoles</li>
            <li>Allen and Heath Consoles</li>
            <li>Autocad Basics</li>
          </ul>
        </div>
        <div class='skills'>
          <h4>Other</h4>
          <ul id='qualslist'>
            <li>Full UK drivers license </li>
            <li>Full DAS 2 UK motorbike license</li>
            <li>PADI level 1 scuba cert</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Quals;
