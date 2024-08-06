import React from 'react'
import './style.css'

import CV from 'assets/NazarTymivCV.pdf'
import { ReactTyped } from 'react-typed'

export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <ReactTyped
            strings={[
              '<strong>Hi, my name is <em>Nazar</em></strong><br />a Front end',
              '<strong>Hi, my name is <em>Nazar</em></strong><br />a Back end',
              '<strong>Hi, my name is <em>Nazar</em></strong><br />a Software Engineer',
            ]}
            startDelay={200}
            backDelay={500}
            typeSpeed={80}
            backSpeed={50}
            onComplete={(self) => (self.cursor.style.opacity = 0)}
          />
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a href={CV} download="NazarTymivCV.pdf" className="btn">
          Download CV
        </a>
      </div>
    </header>
  )
}
