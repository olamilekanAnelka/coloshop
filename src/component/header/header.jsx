import React from 'react'

import '../header/header.css'


{/**the header component */}
const Header = () => {
  return (
    <section className='app__header-section'>
      <div className='container'>
        <div className='app__header'>
          {/**the content part of the header */}
          <div className='app__header-content_section'>
            <h5>SPRING / SUMMER COLLECTION 2017 </h5>
            <h1>Get up to 30% Off New Arrivals </h1>
            <button className='red__btn app__header-btn' type='submit'>SHOP NOW</button>
          </div>
          {/**the img part */}
          <div className='app__header-img_section'>
            <div className='app__header-img'>
              <img 
              src='https://res.cloudinary.com/ilove2support/image/upload/v1687463707/Excella-consult/nurse1_y7bffa.png'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
