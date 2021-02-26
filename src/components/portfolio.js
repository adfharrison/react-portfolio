import React, { Component, useEffect } from 'react';
import beCode from './img/be-code.png';
import beAPI from './img/be-api.jpg';
import beTests from './img/be-tests.jpg';
import feCode from './img/fe-code.jpg';
import feArticle from './img/fe-article.jpg';
import feList from './img/fe-list.jpg';
import projlogin from './img/login.jpg';
import projnewUser from './img/newUser.jpg';
import projUserProfile from './img/userProfile.jpg';
import projMain from './img/mainPage.jpg';
import projMapping from './img/mapping.jpg';
import projJourney from './img/journey.jpg';

const Portfolio = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div class='flex-container bio'>
      <div class='portfolio-header '>
        <p>Ongoing projects</p>
      </div>
      <p>
        I am currently developing some cross-platfrom mobile apps using
        React-Native and Expo, to further diversify and hone my skills. Mobile
        development is somethign that is very interesting to me. As of this
        year, about half of all website usage was via mobile devices, and yet I
        feel it is under-represented in developer education couses, so Ive taken
        it upon myself to start learning it more thoroughly. Below are some
        links to ongoing projects
      </p>
      <div class='button-container'>
        <a
          class='link-button grey-button heroku'
          href='https://github.com/adfharrison/RN-shop-app'
          target='_blank'
          rel='noreferrer'
        >
          Repo - A shopping app
        </a>
        {/* <a
          class='link-button grey-button github'
          href='https://github.com/adfharrison/RN-Meals-app'
          target='_blank'
          rel='noreferrer'
        >
          Repo - A recipe app
        </a> */}
        <a
          class='link-button grey-button github'
          href='https://github.com/adfharrison/RN-guess-a-number'
          target='_blank'
          rel='noreferrer'
        >
          Repo - A number game app
        </a>
      </div>
      <div class='portfolio-header '>
        <p>Final Project</p>
      </div>
      <p>
        Safe Home is my final project with Northcoders. This was a collaborative
        project with three other students. The product is designed to be a
        safety-centric app for those on nights out to help them get home safely,
        or potentially for children to notify parents of their whereabouts. It
        is a full stack development, with our own API, database and front end
        app. import PropTypes from 'prop-types' uses multile techs, including
        React with Hooks, Firebase Authentication, Google maps APIs, EmailJS,
        3rd party geolocation encoding, and multiple CSS methods. It was
        developed mobile-first, and includes the popular Dark Mode.
      </p>

      <div class='gallery'>
        <div class='scrolling-wrapper'>
          <div class='card'>
            {' '}
            <img id='pic-1' src={projlogin} alt='project login page' />
          </div>
          <div class='card'>
            {' '}
            <img id='pic-2' src={projnewUser} alt='project new user page' />
          </div>
          <div class='card'>
            {' '}
            <img id='pic-3' src={projUserProfile} alt=' project user page' />
          </div>
          <div class='card'>
            {' '}
            <img id='pic-4' src={projMain} alt=' project main page' />
          </div>
          <div class='card'>
            {' '}
            <img id='pic-5' src={projMapping} alt=' project mapping page' />
          </div>
          <div class='card'>
            {' '}
            <img id='pic-6' src={projJourney} alt=' project journey page' />
          </div>
        </div>
      </div>

      <div class='button-container'>
        <a
          class='link-button grey-button heroku'
          href='https://safe-home-app.netlify.app'
          target='_blank'
          rel='noreferrer'
        >
          App on Netlify
        </a>
        <a
          class='link-button grey-button github'
          href='https://github.com/adfharrison/nc-final-project-frontend'
          target='_blank'
          rel='noreferrer'
        >
          GitHub repo
        </a>
      </div>
      <div class='portfolio-header '>
        <p>Back End Project</p>
      </div>
      <p>
        A reddit-style server API project, with functionality for reading,
        posting and editing articles and comments, applying votes to them, and
        also adding and removing users. Based on a PostgreSQL database, the api
        makes requests using Knex and Node Postgres, and serves them up using
        Express. Full endpoint and helper function TDD was done using jest,
        supertest and jest-sorted. Hosted on Heroku. If visiting the hosted
        site, please allow time for the server to spin up to speed!
      </p>

      <div class='gallery'>
        <div class='scrolling-wrapper'>
          <div class='card'>
            {' '}
            <img id='pic-1' src={beCode} alt='back end code' />
          </div>
          <div class='card'>
            {' '}
            <img id='pic-2' src={beAPI} alt='heroku hosted api' />
          </div>
          <div class='card'>
            {' '}
            <img id='pic-3' src={beTests} alt=' jest tests' />
          </div>
        </div>
      </div>

      <div class='button-container'>
        <a
          class='link-button grey-button heroku'
          href='https://alans-news-app.herokuapp.com/api'
          target='_blank'
          rel='noreferrer'
        >
          API on Heroku
        </a>
        <a
          class='link-button grey-button github'
          href='https://github.com/adfharrison/be-nc-news-NEW'
          target='_blank'
          rel='noreferrer'
        >
          GitHub repo
        </a>
      </div>
      <div class='portfolio-header '>
        <p>Front End Project</p>
      </div>
      <p>
        This was my first ever App. Its the front end for the above API.
        Developed using React, with requests made using Axios. Internal routing
        uses Reach/Router. This app allows users to log in or register, keeps
        track of the logged in status, and allows the user to browse articles
        and comments, add their own, and also delete only their own articles or
        comments. They may also vote on items on the site. There are also
        sorting and category functions, as well as a log out feature. All these
        features are handled by the back end, there is no 3rd party data
        handling services like Firebase etc. most features are rendered
        optimistically to improve performance. The app was developed using
        mobile-first principles. If visiting the hosted site, please allow time
        for the server to spin up to speed!
      </p>

      <div class='gallery'>
        <div class='scrolling-wrapper'>
          <div class='card'>
            {' '}
            <img id='pic-1' src={feCode} alt='front end code' />
          </div>
          <div class='card'>
            {' '}
            <img id='pic-2' src={feArticle} alt='page from app' />
          </div>
          <div class='card'>
            {' '}
            <img id='pic-3' src={feList} alt=' another page from app' />
          </div>
        </div>
      </div>

      <div class='button-container'>
        <a
          class='link-button grey-button heroku'
          href='https://alans-news.herokuapp.com/'
          target='_blank'
          rel='noreferrer'
        >
          App on Heroku
        </a>
        <a
          class='link-button grey-button github'
          href='https://github.com/adfharrison/nc-news-frontend'
          target='_blank'
          rel='noreferrer'
        >
          GitHub repo
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
