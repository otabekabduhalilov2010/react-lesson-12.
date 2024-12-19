import React, { useEffect } from 'react';
import s from './Header.module.scss';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
    // Инициализация AOS при монтировании компонента
    useEffect(() => {
        AOS.init({
            duration: 1000,  // Длительность анимации
            once: true,      // Анимации будут срабатывать только один раз
            easing: 'ease-in-out', // Тип анимации
        });
    }, []);

    return (
        <header className={s.header}>
            <div className="container">
                <nav className={s.nav}>
                    <Link to={'/'} className={s.logo} data-aos="fade-down">
                        SHOP.CO
                    </Link>

                    <div className={s.menu} data-aos="fade-up" data-aos-delay="200">
                        <Link to="/shop" data-aos="down-up" data-aos-delay="300">Shop</Link>
                        <Link to="/on-sale" data-aos="zoom-in" data-aos-delay="400">On Sale</Link>
                        <Link to="/new-arrivals" data-aos="zoom-in" data-aos-delay="500">New Arrivals</Link>
                        <Link to="/brands" data-aos="zoom-in" data-aos-delay="600">Brands</Link>
                    </div>

                    <input 
                        type="text" 
                        className={s.search}  
                        placeholder="Search for products..." 
                        data-aos="fade-left"
                    />

                    <div className={s.box} data-aos="fade-right" data-aos-delay="700">
                        <img src="/icon-1.svg" alt="" />
                        <img src="/icon-2.svg" alt="" />
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
