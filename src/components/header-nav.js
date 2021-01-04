import React from 'react';
import { Link } from '@reach/router';

class Header extends React.Component {
  render() {
    return (
      <div className='uppermask'>
        <header className='header'>ALAN HARRISON</header>
        <div className='typewritercontainer'>
          <div className='typewriter '>Development Portfolio</div>
        </div>
        <div className='nav'>
          <Link to='/'>
            <button className='navButton'>Bio</button>
          </Link>
          <Link to='/portfolio'>
            <button className='navButton'>Portfolio</button>
          </Link>
          <Link to='/quals'>
            <button className='navButton'>Quals</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
