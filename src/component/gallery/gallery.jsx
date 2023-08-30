import React from 'react'
import '../gallery/gallery.css'


{/**the gallery compoent */}
const Gallery = () => {
  return (
    <section>
      <div className='container'>
        <div className='app__gallery-parent'>
          {/**box 1 */}
          <div className='app__gallery-box women__banner'>
            <div className='app__gallery-banner '>
              <a href="" className="banner__btn gallery__banner">women's</a>
              </div>
            </div>
            {/**box 2 */}
            <div className='app__gallery-box accesories__banner'>
            <div className='app__gallery-banner'>
              <a href="" className="banner__btn gallery__banner">accesories's</a>
              </div>
            </div>
            {/**box 3 */}
            <div className='app__gallery-box men__banner'>
            <div className='app__gallery-banner'>
              <a href="" className="banner__btn gallery__banner">men's</a>
              </div>
            </div>

        </div>
      </div>
     </section>
  )
}

export default Gallery;
