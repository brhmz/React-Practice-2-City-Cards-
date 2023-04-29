import React from 'react'

function header({user}) {
  return (
    <div className='header-container'>
        <div className='nav-container'>
            <a href = '/'>Home</a>
            <a href = '/contactus'>Contact US</a>
            <a href = '/aboutus'>About Us</a>
        </div>
        <div className='profile-container'>
            <img className='profile-image' src = {user.imageUrl} alt={use.userName}/>
            <p>{user.firstName}</p>
        </div>
    </div>
  )
}

export default header
