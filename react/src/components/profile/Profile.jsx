import React from 'react'
import './profile.scss'
import ProfileHeader from '../profileheader/ProfileHeader'
import { Profil } from './importp.js'
import { BiBook } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const quizes = [
  { title: 'Quiz 1', duration: '1 Hour', icon: <BiBook />, link: '/exam/1' },
  { title: 'Quiz 2', duration: '1 Hour', icon: <BiBook />, link: '/exam/2' },
  { title: 'Quiz 3', duration: '1 Hour', icon: <BiBook />, link: '/exam3/' },
  { title: 'Quiz 4', duration: '1 Hour', icon: <BiBook />, link: '/exam/4' },
  { title: 'Quiz 5', duration: '1 Hour', icon: <BiBook />, link: '/exam/5' },
  { title: 'Quiz 6', duration: '1 Hour', icon: <BiBook />, link: '/exam/6' },
]

const Profile = () => {
  return (
    <div className='sepp__profile'>
      <ProfileHeader />
      <div className='sepp__profile-user--profile'>
        <div className='sepp__profile-user--detail'>
          <img src={Profil} alt='' />
          <h4 className='sepp__profile-username'>Sam Kall</h4>
          <span className='sepp__profile-category'>(Potential Hire)</span>
        </div>
        <div className='sepp__profile-quizes'>
          {quizes.map((quiz, index) => (
            <Link
              to={`/exam/${index + 1}`}
              className='sepp__profile-quiz__quiz'
              key={index}
            >
              <div className='sepp__profile-quiz--detail'>
                <div className='sepp__profile-quiz--icon'>{quiz.icon}</div>
                <div className='sepp__profile-quiz--name'>
                  <h5 className='sepp__profile-quiz--title'> {quiz.title}</h5>
                  <span className='sepp__profile-quiz--duration'>
                    {quiz.duration}
                  </span>
                </div>
              </div>
              <div className='sepp__profile-quiz--action'>|</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile
