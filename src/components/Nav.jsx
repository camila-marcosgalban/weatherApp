import React from 'react';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import style from './Nav.module.css'
import { Link } from 'react-router-dom';


// function Nav({onSearch}) {
//   return (
//     <nav className="navbar navbar-dark bg-dark">
//         <span className="navbar-brand">
//           <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
//           Henry - Weather App
//         </span>
//         <SearchBar
//           onSearch={onSearch}
//         />
//     </nav>
//   );
// };

function Nav({ onSearch }) {
  return (
    <nav>
      <div>
        <Link to='/'>
          <h1 className="navbar-brand">
            {/* <img id="logoHenry" src={Logo} width="30" height="30" alt="" /> */}
            Henry - Weather App
          </h1>
        </Link>
        {/* <Link to='/about'>
        <span>About</span>
      </Link> */}
      </div>
      <SearchBar
        onSearch={onSearch}
      />
    </nav>
  );
};

export default Nav;
