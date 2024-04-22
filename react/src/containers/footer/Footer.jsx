import React from 'react'
import './footer.css'
import seppFooter from '../../assets/cutoutsepp.png'

const Footer = () => {
  return (
    <div className='sepp__footer section__padding'>
      <div className='sepp__footer-heading'>
        <h1 className='gradient__text'>
          Are you ready to embrace the future ahead of the curve?
        </h1>
      </div>
      <div className='sepp__footer-btn'>
        <p>Be among the first to gain privileged access today.</p>
      </div>
      <div className='sepp__footer-links'>
        <div className='sepp__footer-links_logo'>
          <img src={seppFooter} alt='footerlogo' />
          <p>Pioneer Your Path to Success.</p>
        </div>
        <div className='sepp__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>FAQs</p>
        </div>
        <div className='sepp__footer-links_div'>
          <h4>Career Counseling</h4>
          <p>Study Resources</p>
          <p>Practice Tests</p>
          <p>Tutoring Services/Interview Tips</p>
        </div>
        <div className='sepp__footer-links_div'>
          <h4>Community Support</h4>
          <p>Discussion Forums</p>
          <p>Charity Events</p>
          <p>Networking Events</p>
        </div>
        <div className='sepp__footer-copyright'>
          <p>© 2024 SEPP. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
