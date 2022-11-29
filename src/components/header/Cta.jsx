import React from 'react'
import Resume from '../../assests/Resume.pdf'
const Cta = () => {
  return (
    <div className='cta'>
        <a href={Resume} download className='btn'> Download CV</a>
        <a href="#contact" className='btn btn-primary'>Say Hi</a>
    </div>
  )
}

export default Cta