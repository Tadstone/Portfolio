import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import { Link } from 'react-scroll'

function Navbar() {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Dr Mamun</div>
                <Toggle />

            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: "none" }}>
                        <li>
                            <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="services" spy={true} smooth={true}>
                                Serivces
                            </Link>
                        </li>
                        <li>
                            <Link to="works" spy={true} smooth={true}>
                                Experience
                            </Link>
                        </li>
                        <li>
                            <Link to="portfolio" spy={true} smooth={true}>
                                Protfolio
                            </Link>
                        </li>
                        <li>
                            <Link to="testimonial" spy={true} smooth={true}>
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>
                <button className='button n-button'>
                    <Link to="contact" spy={true} smooth={true}>
                        Contact us
                    </Link>
                </button>
            </div>



        </div>
    )
}

export default Navbar