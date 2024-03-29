import React from 'react'
import opacityTransition from 'utils/opacityTransition'

const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>London, United Kingdom</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">WhatsApp</h2>
            <p>
              <a href="tel:+447513816270">+44 751 381 6270</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:nazartumiv@gmail.com">nazartumiv@gmail.com</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  )
}

export default opacityTransition(Contacts)
