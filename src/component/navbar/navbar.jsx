import React from 'react'


import {FiSearch} from 'react-icons/fi';
import {BiSolidContact} from 'react-icons/bi';
import {PiShoppingCartSimple} from 'react-icons/pi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineRestaurantMenu} from 'react-icons/md'



import '../navbar/navbar.css'
     {/**the navbar component  */}
    const Navbar = () => {
      const [toggleMenu, setToggleMenu] = React.useState(false);

    


 

  return (
    
              <section>
                <div className="app__navbar container">
                  {/**the navbar brand */}
                  <h1 className='app__navbar-brand'>
                    COLO<span>SHOP</span>
                  </h1>

                   {/** it the ul on the navbar which will disapper 
                    * on tab and mobile screen
                    */}
                  <div>
                    <ul className='app__navbar-ul'>
                      <li><a href="#home">home</a></li>
                      <li><a href="#shop">shop</a></li>
                      <li><a href="#promotion">promotion</a></li>
                      <li><a href="#pages">pages</a></li>
                      <li><a href="#blog">blog</a></li>
                      <li><a href="#contact">contact</a></li>
                    </ul>
                  </div>
                    

                    {/**the icon on the navbar */}
                  <div className='app__navbar-logo_parent'>
                    <div className='app__navbar-logo'>
                     <a href=""> <FiSearch /></a>
                    </div>

                    <div className='app__navbar-logo'>
                      <a href=""><BiSolidContact /></a>
                    </div>

                    <div className='app__navbar-logo navbar__cartlogo'>
                    <a href=""><PiShoppingCartSimple /></a>
                    </div>

                    </div>
                      


                      {/**the toggle menu on the mobile and tab screen */}
                      <div className="app__navbar-smallscreen">
                      <GiHamburgerMenu 
                      fontSize={27} 
                      onClick={() => 
                      setToggleMenu(true)} />

                      {toggleMenu && (
                        <div className={`app__navbar-smallscreen_overlay 
                            ${toggleMenu ? 'open' : ''}`}>
                          <MdOutlineRestaurantMenu
                            className="overlay__close"
                            fontSize={27}
                            onClick={() => setToggleMenu(false)}
                          />
                      
                      <ul className="app__navbar-smallscreen-links">
                        <li className="navbar__P">
                          <a href="#usd">USD</a>
                        </li>
                        <li className="navbar__P">
                          <a href="#english">ENGLISH</a>
                        </li>
                        <li className="navbar__P">
                          <a href="#myaccount">MY ACCOUNT</a>
                        </li>
                        <li className="navbar__P">
                          <a href="#home">HOME</a>
                        </li>
                        <li className="navbar__P">
                          <a href="#shop">SHOP</a>
                        </li>
                        <li className="navbar__P">
                          <a href="#promotion">PROMOTION</a>
                        </li>
                        <li className="navbar__P">
                          <a href="#pages">PAGES</a>
                        </li>
                        <li className="navbar__P">
                          <a href="#blog">BLOG</a>
                        </li>
                        <li className="navbar__P">
                          <a href="#contact">CONTACT</a>
                        </li>
                      </ul>
                  </div>
                )}
              </div>
            
            </div>
          </section>
          
      )
    };
    
export default Navbar;

              
       


          
          
