import React from 'react'
import s from './Header.module.scss'
import { Link } from 'react-router-dom'
const Header = () => {
  return (

<>

<header className={s.header}>
    <div className="container">
        <nav className={s.nav}>
            <Link to={'/'} className={s.logo}>Shop.co</Link>
            <div className={s.menu}>
                <Link>Shop</Link>
                <Link>On Sale</Link>
                <Link>New Arrivals</Link>
                <Link>Brands</Link>
            </div>

            <input placeholder='Search for products...' className={s.search} />

            <div className={s.box}>
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
        </nav>
    </div>
</header>

</>

    )
}

export default Header