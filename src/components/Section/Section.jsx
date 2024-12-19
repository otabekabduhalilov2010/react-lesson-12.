import React, { useEffect } from 'react'
import './Section.scss'
import { Link } from 'react-router-dom';
import Aos from 'aos';
const Section = () => {

 useEffect(() => {
        Aos.init({
            duration: 1000,  // Длительность анимации
            once: true,      // Анимации будут срабатывать только один раз
            easing: 'ease-in-out', // Тип анимации
        });
    }, []);

  return (
  <>
   <section className="section1">
    <div className="container">
        <div className="wrapper2">

            <div className="box2">

            <h1 data-aos="fade-down"> FIND  CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p  data-aos="fade-down">Browse through our diverse range of meticulously crafted garments, designed <br /> to bring out your individuality and cater to your sense of style.</p>
                <button  data-aos="fade-down">Shop Now</button>

           

                

                 <div className="box3">
                    <div className="card">
                        <h1  data-aos="fade-down">200+</h1>
                        <p  data-aos="fade-down">International Brands</p>
                    </div>
                    <div className="card">
                        <h1  data-aos="fade-down">2000+</h1>
                        <p  data-aos="fade-down">High-Quality Products</p>
                    </div>
                    <div className="card">
                        <h1  data-aos="fade-down">30000+</h1>
                        <p  data-aos="fade-down">Happy Customers</p>
                    </div>
                    
                </div>

                </div>
          
            <img  data-aos="fade-down" src="./heroimg.png" alt="" />
        </div>
    </div>
   </section>
  </>
  )
}

export default Section
