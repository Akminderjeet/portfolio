import React from 'react'
import { Person, Mail } from '@material-ui/icons'
import './topbar.scss'

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className='wrapper'>
                <div className='left'>
                    <a href='#intro' className='logo'>asdfas</a>
                    <div className='itemContainer'>
                        <Person className='icon'></Person>
                        <span>7087197427</span>
                    </div>
                    {/* <h1>Hello</h1> */}

                    <div className='itemContainer'>
                        <Mail className='icon'></Mail>
                        <span>7087197427</span>
                    </div>

                </div>

                <div className='right'>
                    <div className='hamburger ' onClick={() => { setMenuOpen(!menuOpen); }}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>

                    </div>


                </div>
            </div>
        </div>
    )
}
