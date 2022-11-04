import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './resume.pdf'


import { useContext } from 'react'
import { themeContext } from '../../Context'
import {motion} from 'framer-motion'
// import {motion} from 'framer-motion'
function Services() {


  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // const transition = {duration: 1,type: "spring"}

  return (
    <div className="services"  id='services'>
      {/* Left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? 'white' : '' }}>My</span>
        <span>Services</span>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Veritatis, hic!
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>

      </div>

      {/* Right side  */}

      <div className="cards">

        <motion.div

          animate={{ top: '2rem' }}
          transition={{ ease: "easeOut", duration: 2 }}

          // initial={{ left: "25rem" }}
          // whileInView={{ left: "14rem" }}
          // transition={transition}


          style={{ top : '0rem' ,left: '14rem'  }}

        >
          <Card
            emoji={HeartEmoji}
            heading={'Design'}
            detail={"Figma, Sketch, Photoshop, adobe"}
          />
        </motion.div>

        <motion.div 
        
        animate={{ top  : '10rem' }}
        transition={{ ease: "easeOut", duration: 2 }}
        
        style={{ top: '12rem', left: '-2rem' }}>
          <Card
            emoji={Glasses}
            heading={'Developer'}
            detail={"HTML, CSS, Javascript, React"}
          />
        </motion.div>

        <motion.div 
        
        animate={{ top: '14rem' }}
        transition={{ ease: "easeOut", duration: 2 }}
        
        style={{ top: '16rem', left: '30rem' }}>
          <Card
            emoji={Humble}
            heading={'UI/UX'}
            detail={"lorem"}
          />
        </motion.div>

        <div className="blur s-blur2" style={{ background: " var(--purple)" }}></div>


      </div>
    </div>

  )
}

export default Services