import { React, useEffect, useState } from 'react';
import Gallery from './gallery';

const Bio = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className='flex-container'>
      <div className='bio'>
        <div className='paragraph-header'>
          <p>Bio</p>
        </div>
        <p>
          I am a Manchester, UK, based web developer who graduated from the
          NorthCoders Manchester school. Having spent 10 years working in the
          live music industry, yelling at computers in cold corners of Belarus
          and Birmingham, I thought it was time for a change, to yelling at them
          in warm offices in the UK. So, after years as an audio engineer, I
          decided that the time was right to retrain and launch a new career.
        </p>
      </div>
      <Gallery />
      <div className='bio'>
        <p>
          Bringing the core live-event skills of staying on the cutting edge of
          technology, coupled with problem solving, working to tight deadlines
          with large teams of colleagues, and putting end-user experience high
          on the project priorites, I feel that the two industries are extremely
          similar, and thus can bring a wealth of ready-made and hard-won
          knowledge and inter-personal skills to bear. I even beta tested
          software in some extremely ill-judged attempts to push the envelope
          before it had even been licked. Experience in skillfully bringing
          Artist and managemenet's fantastical whims to realistic fruition gives
          me a strong understanding of how art and technology can come together,
          and improve the world.
        </p>
      </div>

      <div class='bio'>
        <div class='skills'>
          <h4>Languages / Tech</h4>
          <ul id='skillslist'>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Node JS</li>
            <li>Node Postgres</li>
            <li>SQL</li>
            <li>React</li>
            <li>React Native</li>
            <li>Jest JS</li>
          </ul>
        </div>
        <p>
          Along with these languages, I also have a drive to continually update
          my knowledge base, using online or taught resources such as Udemy,
          Code Academy and others. I have great pair-coding skills, being
          communicative and able to follow other's thought processes well. I
          also firmly believe in TDD, as being the most efficient and thorough
          way of development. Im also an advocate of mobile-first development,
          and am currently learning the various practices involved in this.
        </p>
      </div>
    </div>
  );
};

export default Bio;
