import React from 'react';
import s from './Navbar.module.css';

const Navbar = () =>{
    return(
        <nav className={s.nav}>
            <div>
                <a href=''>Profile</a>
            </div>
            <div>
                <a className={s.item} href=''>News</a>
            </div>
            <div>
                <a className={`${s.item} ${s.active}`} href=''>Messages</a>
            </div>
            <div className={s.item}>
                <a href=''>Music</a>
            </div>
            <div className={s.item}>
                <a href=''>Settings</a>
            </div>
        </nav>
    )
};

export default Navbar;