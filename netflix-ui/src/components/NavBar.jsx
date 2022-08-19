import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import {FaPowerOff, FaSearch} from 'react-icons/fa';
import {signOut} from "firebase/auth"
import {firebaseAuth} from "../utils/firebase-config"

const NavBar = ({isScrolled}) => {
  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);

  const links = [
    {name: 'Home', link: '/home'},
    {name: 'TV shows', link: '/tv'},
    {name: 'Movies', link: '/movies'},
    {name: 'My List', link: '/mylist'},
  ];
  return (
    <Container>
      <nav className={` ${isScrolled ? 'scrolled' : ''}`}>
        <div className='left flex a-center'>
          <div className='brand'>
            <img src={logo} alt='logo' />
          </div>
          <ul className='links flex'>
            {links.map(({name, link}) => (
              <li key={name}>
                <Link to={link}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='right flex a-center'>
          <div className={`search ${showSearch ? 'show-search' : ''}  `}>
            <button onFocus={()=>setShowSearch(true)} onBlur={()=>{
              if(!inputHover) {
                setShowSearch(false);
              }
            }}>
            <FaSearch/>
            </button>
            <input type="text" placeholder="Search..." onMouseEnter={()=>setInputHover(true)} onMouseLeave={()=>setInputHover(false)} onBlur={()=>{
              setInputHover(false);
              setShowSearch(false);
            }}/>
          </div>
          <button onClick={()=>signOut(firebaseAuth)}>
            <FaPowerOff/>
          </button>
        </div>
      </nav>
    </Container>
  );
};

export default NavBar;

const Container = styled.div`

`;
