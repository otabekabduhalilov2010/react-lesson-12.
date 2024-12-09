import React from 'react'
import './Section.scss'
const Section = () => {
  return (
  <>
   <section className="section1">
    <div className="container">
        <div className="wrapper2">
            <div className="box2">
                <h1>FIND  CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p>Browse through our diverse range of meticulously crafted garments, designed <br /> to bring out your individuality and cater to your sense of style.</p>
                <button>Shop Now</button>

                 <div className="box3">
                    <div className="card">
                        <h1>200+</h1>
                        <p>International Brands</p>
                    </div>
                    <div className="card">
                        <h1>2000+</h1>
                        <p>High-Quality Products</p>
                    </div>
                    <div className="card">
                        <h1>30000+</h1>
                        <p>Happy Customers</p>
                    </div>
                    
                </div>
            </div>
            <img src="./heroimg.png" alt="" />
        </div>
    </div>
   </section>
  </>
  )
}

export default Section
