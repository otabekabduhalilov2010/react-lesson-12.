import React, { useEffect } from 'react'
import'./Section2.scss'
import Aos from 'aos';
const Section2 = () => {

   useEffect(() => {
          Aos.init({
              duration: 1000,  // Длительность анимации
              once: true,      // Анимации будут срабатывать только один раз
              easing: 'ease-in-out', // Тип анимации
          });
      }, []);

  return (
   <>
   
   <section className="section2">
    <div className="container">
        <div className="wraper3">
          <div className="box4">
          <img  data-aos="fade-down" src="/Vector.png" alt="" />
           <img  data-aos="fade-down" src="/Vector2.png" alt="" />
           <img  data-aos="fade-down" src="/Vector3.png" alt="" />
           <img  data-aos="fade-down" src="/Group.png" alt="" />
          </div>
        </div>
    </div>
   </section>
   
   </>
  )
}

export default Section2