import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'
const HeaderSos = () => {
  return (
    <div className='header-sos'>
        <a href="https://www.linkedin.com/in/pravinb07" rel="noreferrer" target="_blank"> <BsLinkedin /> </a>
        <a href="https://github.com/pravinb-07"rel="noreferrer" target="_blank"><FaGithub /></a>
        <a href="https://www.instagram.com/iam.praveen._/" rel="noreferrer"target="_blank"><BsInstagram /></a>
        <a href="#contact" rel="noreferrer" ><SiGmail /></a>

    </div>
  )
}

export default HeaderSos