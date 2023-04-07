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
          <button className='btn btn-sm' href='https://www.linkedin.com/in/steve-shannon-03aa8b59/'>Work with me</button>
        
          
          
        </div>
      </div>
    </header>
  );
};

export default Header;
