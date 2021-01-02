import React from 'react';

const Portfolio = (props) => {
  return (
    <div class='flex-container bio'>
      <div class='paragraph-header '>
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
            <img id='pic-1' src='./img/newsserver.png' alt='back end code' />
          </div>
          <div class='card'>
            {' '}
            <img
              id='pic-2'
              src='./img/resized 2/heroku.jpg'
              alt='heroku hosted api'
            />
          </div>
          <div class='card'>
            {' '}
            <img id='pic-3' src='./img/resized 2/tests.jpg' alt=' jest tests' />
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
    </div>
  );
};

export default Portfolio;
