import React from "react";
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsFillBookFill} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'
import {IoMdContact} from 'react-icons/io'
import { useState } from "react";

export const NavBar = () => {
  const[activeNav, setActiveNav] = useState('#')
  return <nav>
    <a onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} href="#home"><AiOutlineHome /></a>
    <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
    <a onClick={()=> setActiveNav('#exp')} className={activeNav === '#exp' ? 'active' : ''} href="#exp"><BsFillBookFill /></a>
    <a onClick={()=> setActiveNav('#port')} className={activeNav === '#port' ? 'active' : ''} href="#port"><AiFillHeart/></a>
    <a onClick={()=> setActiveNav('#con')} className={activeNav === '#con' ? 'active' : ''} href="#contact"><IoMdContact /></a>

  </nav>
};
