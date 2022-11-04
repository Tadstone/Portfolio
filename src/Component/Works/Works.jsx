import React from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png'
import Fiver from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'

import { motion } from 'framer-motion'


import { useContext } from 'react'
import { themeContext } from '../../Context'

function Works() {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="works">

            {/* left side */}
            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}>Works For ALL These</span>
                <span>Brands And Client</span>
                <span>Lorem ipsum dolor sit amet consectetur
                    <br /> adipisicing elit. <br />
                    Veritatis, hic!
                </span>

                <button className="button s-button">Hire Me</button>

                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>

            </div>

            {/* Right side */}

            <div className="w-right">
                <div className="w-mainCircle">


                    <motion.div
                        animate={{ top: '-2rem' }}
                        transition={{ ease: "easeOut", duration: 2 }}

                        style={{ top: '2rem' }}

                        className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </motion.div>

                    <motion.div

                        animate={{ left: '-2rem' }}
                        transition={{ ease: "easeOut", duration: 2 }}

                        style={{ left: '2rem' }}
                        className="w-secCircle">
                        <img src={Fiver} alt="" />
                    </motion.div>

                    <div
                    
                    
                    // animate={{ x: 100 }}
                    // transition={{ ease: "easeOut", duration: 2 }}
                    
                    
                    className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>

                    <motion.div

                        animate={{ left: '14rem' }}
                        transition={{ ease: "easeOut", duration: 2 }}

                        style={{ left: '10rem' }}

                        className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </motion.div>
                    
                    <motion.div
                    
                    animate={{ top: '14rem' }}
                    transition={{ ease: "easeOut", duration: 2 }}

                    style={{ top: '8rem'}}
                    
                    className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </motion.div>

                </div>
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>

            </div>
        </div>
    )
}

export default Works