import React from 'react'
import './style.css'

// IMG
import telegram from 'assets/img/icons/telegram.png'
import gmail from 'assets/img/icons/gmail.png'
import gitHub from 'assets/img/icons/gitHub.svg'
import linkedIn from 'assets/img/icons/linkedin.png'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a
                href="https://github.com/NazarTymiv"
                target="_blank"
                rel="noreferrer"
              >
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://t.me/TripToon" target="_blank" rel="noreferrer">
                <img src={telegram} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="mailto:nazartumiv@gmail.com">
                <img src={gmail} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.linkedin.com/in/nazar-tymiv/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedIn} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>
              © 2022 Nazar Tymiv. All rights reserved. Copying content/design is
              punishable by law.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
