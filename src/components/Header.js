import React from 'react';
// images
import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href='#'>
            <img src={Logo} alt='' width="150" height="150" />
          </a>

          {/* button */}
          <a href='https://www.linkedin.com/in/steve-shannon-03aa8b59/'>
            <button className='btn btn-sm' >Work with me</button>
          </a>

        </div>
      </div>
    </header>
  );
};

export default Header;
