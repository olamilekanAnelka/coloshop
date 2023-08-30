import React from 'react'
/*import {img} from '../../asset'*/

import '../newArrival/newArrival.css'

const NewArrival = () => {
  const [activeCategory, setActiveCategory] = React.useState('all');

  const handleCategoryClick = (category, event) => {
    event.preventDefault();
    setActiveCategory(category);
  };

  
  return (
    <section>
      <div className='container'>
        <div className="app__newarrival-wrapper">
          <h1 className='app__newarrival-heading'>
              New Arrivals
          </h1>
          <div className='section__title'/>

          <div className="product__btn">
              <a href="#" onClick={(event) => 
                handleCategoryClick('all', event)} 
                className={activeCategory === 'all' ?
                 'product__btn-tag active' :
                  'product__btn-tag'}>ALL
                  </a>


              <a href="#" onClick={(event) => 
                handleCategoryClick('women', event)} 
                className={activeCategory === 'women' ? 
                'product__btn-tag active' : 
                'product__btn-tag'}>WOMEN'S
                </a>


              <a href="#" onClick={(event) => 
                handleCategoryClick('accessories', event)} 
                className={activeCategory === 'accessories' 
                ? 'product__btn-tag active'
                 : 'product__btn-tag'}>ACCESSORIES
                 </a>


              <a href="#" onClick={(event) => 
                handleCategoryClick('men', event)} 
                className={activeCategory === 'men' 
                ? 'product__btn-tag active' :
                 'product__btn-tag'}>MEN'S
                 </a>

          </div>
           
           <div className='product__item'>
           <div className={`product__item-box men ${activeCategory === 'men' || activeCategory === 'all' ? 'active' : ''}`}>
                <img 
                src="https://preview.colorlib.com/theme/coloshop/images/product_1.png" 
                alt="" />
                <a href=''>Fujifilm X100T 16 MP Digital Camera (Silver)</a>
                <p>$520.00 <span>$590.00</span> </p>
                <button className='product__hidden-btn'>Add To Cart</button>
            </div>
             <div className={`product__item-box women ${activeCategory === 'women' || activeCategory === 'all' ? 'active' : ''}`}>
             <img 
                src="https://preview.colorlib.com/theme/coloshop/images/product_2.png"
                 alt="" />
                 <a href=''>Samsung CF591 Series Curved 27-Inch FHD Monitor</a>
                 <p>$610.00</p>
                 <button className='product__hidden-btn'>Add To Cart</button>
            </div>
            <div className={`product__item-box women ${activeCategory === 'women' || activeCategory === 'all' ? 'active' : ''}`}>
              <img 
              src='https://preview.colorlib.com/theme/coloshop/images/product_3.png' 
              alt />
              <a href=''>Blue Yeti USB Microphone Blackout Edition</a>
              <p>$120.00</p>
              <button className='product__hidden-btn'>Add To Cart</button>
            </div>
            <div className={`product__item-box men ${activeCategory === 'men' || activeCategory === 'all' ? 'active' : ''}`}>
              <img src='https://preview.colorlib.com/theme/coloshop/images/product_4.png' 
              alt='' />
              <a href=''>DYMO LabelWriter 450 Turbo Thermal Label Printer</a>
              <p>$410.00</p>
              <button className='product__hidden-btn'>Add To Cart</button>
            </div>
            <div className={`product__item-box women ${activeCategory === 'women' || activeCategory === 'all' ? 'active' : ''}`}>
              <img src='https://preview.colorlib.com/theme/coloshop/images/product_5.png' 
              alt='' />
              <a href=''>Pryma Headphones, Rose Gold & Grey</a>
              <p>$180.00</p>
              <button className='product__hidden-btn'>Add To Cart</button>
            </div>
            <div className={`product__item-box accessories ${activeCategory === 'accessories' || activeCategory === 'all' ? 'active' : ''}`}>
              <img src='https://preview.colorlib.com/theme/coloshop/images/product_6.png' 
              alt='' />
              <a href=''>Fujifilm X100T 16 MP Digital Camera (Silver)</a>
              <p>$520.00 <span>$590.00</span> </p>
              <button className='product__hidden-btn'>Add To Cart</button>
            </div>
            <div className={`product__item-box accessories ${activeCategory === 'accessories' || activeCategory === 'all' ? 'active' : ''}`}>
              <img src="https://preview.colorlib.com/theme/coloshop/images/product_7.png" 
              alt='' />
              <a href=''>Samsung CF591 Series Curved 27-Inch FHD Monitor</a>
              <p>$610.00</p>
              <button className='product__hidden-btn'>Add To Cart</button>
            </div>
            <div className={`product__item-box men ${activeCategory === 'men' || activeCategory === 'all' ? 'active' : ''}`}>
              <img src='https://preview.colorlib.com/theme/coloshop/images/product_8.png'
               alt='' />
               <a href=''>Blue Yeti USB Microphone Blackout Edition</a>
               <p>$120.00</p>
               <button className='product__hidden-btn'>Add To Cart</button>
            </div>
            <div className={`product__item-box women ${activeCategory === 'women' || activeCategory === 'all' ? 'active' : ''}`}>
              <img src='https://preview.colorlib.com/theme/coloshop/images/product_9.png' 
              alt=''/>
              <a href=''>DYMO LabelWriter 450 Turbo Thermal Label Printer</a>
              <p>$410.00</p>
              <button className='product__hidden-btn'>Add To Cart</button>
            </div>
            <div className={`product__item-box accessories ${activeCategory === 'accessories' || activeCategory === 'all' ? 'active' : ''}`}>
              <img src='https://preview.colorlib.com/theme/coloshop/images/product_10.png' 
              alt='' />
              <a href=''>Pryma Headphones, Rose Gold & Grey</a>
              <p>$180.00</p>
              <button className='product__hidden-btn'>Add To Cart</button>
            </div>
           </div>
        </div>
      </div>
    </section>
  )
}

export default NewArrival;
