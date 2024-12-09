import React from 'react'
import s from './CategoryWrap.module.scss'

const CategoryWrap = () => {
  return (
    <section>
        <div className="container">
            <div className="wrap">
               <div className={s.box}>
               <a href="">Home</a>
               <a href="">Casual</a>
               </div>
               <div className={s.btn}>
               <h1>Filters</h1> 
               <button><img src="./Vector.png" alt="" /></button>
               </div>
            </div>
        </div>
    </section>
  )
}

export default CategoryWrap