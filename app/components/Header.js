import React from 'react';
import {Link} from 'react-router';

const Header = () => {
  return(
    <Link to='/login'>
      <button>Sign In</button>
    </Link>
  )
}

export default Header;
