import React from 'react'
import './Intro.css'

import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
// import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";

import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import { useContext } from 'react'
import { themeContext } from '../../Context'
import { Link } from 'react-scroll'

// import { motion } from 'framer-motion'


// import thumbup from '../../img/thumbup.png'
// import Crown from '../../img/crown.png'
// import glassessimoji from '../../img/glassesimoji.png'
// import Github from '../../img/github.png'
function Intro() {


    // const transition = { duration: 2, type: 'spring' }



    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="Intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? 'white' : '' }}>Hy! I Am </span>
                    <span>Dr Mamun</span>
                    <span>I'll assist you with your illnesses. Simply email me to schedule an appointment.</span>
                </div>
                <button className="button i-button">

                    <Link to="contact" spy={true} smooth={true}>
                        Contact
                    </Link>
                </button>

                <div className="i-icons">
                    <a href="https://github.com/Tadstone">
                        <img src={Github} alt="" />

                    </a>
                    <a href="https://github.com/Tadstone">

                        <img src={LinkedIn} alt="" />
                    </a>
                    <a href="https://www.facebook.com/habibullah.almasum.33/">
                        <img src={Instagram} alt="" />

                    </a>
                </div>


            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />



            </div>
        </div>
    )
}

export default Intro