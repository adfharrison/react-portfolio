import React from 'react';
import beCode from './img/be-code.png';
import beAPI from './img/be-api.jpg';
import beTests from './img/be-tests.jpg';
import feCode from './img/fe-code.jpg';
import feArticle from './img/fe-article.jpg';
import feList from './img/fe-list.jpg';

const Portfolio = (props) => {
  return (
    <div class='flex-container bio'>
      <div class='portfolio-header '>
        <p>Back End Project</p>
      </div>
      <p>
        A reddit-style server API project, with functionality for reading,
        posting and editing articles and comments, applying votes to them, and
        also adding and removing users. Based on a PostgreSQL database, the api
        makes requests using Knex and Node Postgres, and serves them up using
        Express. Full endpoint and helper function TDD was done using jest,
        supertest and jest-sorted. Hosted on Heroku.
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
        >
          Click here to see the API on Heroku
        </a>
        <a
          class='link-button grey-button github'
          href='https://github.com/adfharrison/be-nc-news-NEW'
        >
          Click here for the GitHub repo
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
        mobile-first principles.
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
        >
          Click here to see the App on Heroku
        </a>
        <a
          class='link-button grey-button github'
          href='https://github.com/adfharrison/nc-news-frontend'
        >
          Click here for the GitHub repo
        </a>
      </div>

      <div class='portfolio-header '>
        <p>Final Project</p>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor
        leo risus, eu viverra nulla fermentum a. Cras ut congue dolor. Morbi
        dignissim maximus leo, eu sagittis ligula mattis in. Proin efficitur
        tincidunt volutpat. Suspendisse pulvinar, neque non condimentum
        pellentesque, lacus turpis eleifend est, tincidunt feugiat ante arcu in
        velit. Praesent at enim nec odio egestas efficitur. Praesent quis felis
        eu odio venenatis porta quis vel lectus. Nunc venenatis ante sed ligula
        rhoncus, at lobortis turpis iaculis. Etiam cursus aliquet lectus euismod
        accumsan.
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
        >
          Click here to see the App on Heroku
        </a>
        <a
          class='link-button grey-button github'
          href='https://github.com/adfharrison/nc-news-frontend'
        >
          Click here for the GitHub repo
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
