import React from 'react'
import './header.css'
import visited from '../../assets/visited.png'
import vrexam from '../../assets/vrexam.jpg'

const Header = () => {
  return (
    <div className='sepp__header section__padding' id='home'>
      <div className='sepp__header-content'>
        <h1 className='gradient__text'>
          Best Guide to Succeed in Professional and Scholarship Exams...
        </h1>
        <p>
          Welcome to the ultimate destination for mastering professional and
          scholarship exams. Whether you're aiming for that dream job, pursuing
          higher education opportunities, or striving for academic excellence,
          our comprehensive guide and practice questions are designed to equip
          you with the knowledge, strategies, and confidence needed to excel.
        </p>
        <div className='sepp__header-content__input'>
          <input type='email' placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>
        <div className='sepp__header-content__people'>
          <img src={visited} alt='visitors' />
          <p> 32,448 people visited in the last 7 days</p>
        </div>
      </div>
      <div className='sepp__header-image'>
        <img src={vrexam} alt='vrexam' />
      </div>
    </div>
  )
}

export default Header
