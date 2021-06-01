import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../../assets/image/logo.svg'
import LandingImg from '../../assets/image/landing.svg'

/*Icones*/

import studyIcon from '../../assets/icon/study.svg'
import giveIcon from '../../assets/icon/give-classes.svg'
import TotalIcon from '../../assets/icon/purple-heart.svg'

import './styles.css'

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">

        <div className="logo-container">
          <img src={Logo} alt="proofy" />
          <h2>Sua plataforma de estudo online</h2>
        </div>

        <img src={LandingImg} 
        alt="plataforma de estudo online" 
        className="hero-image" 
        />

        <div className="buttons-container">

          <Link to="/study" className="study">
            <img src={studyIcon} alt="eSTUDAR" />
             Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveIcon} alt="DAR AULAS" />
             Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Tota de 200 conexoes <img src={TotalIcon} alt="" />
        </span>
        
      </div>
    </div>
  )
}

export default Landing;