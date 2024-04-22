import React from 'react'
import {Header} from 'components/header/Header'
import opacityTransition from 'utils/opacityTransition'

const HomePage = () => {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-1 aboutme-title">About me</h2>
              <p>
                My name is Nazar, I'm a Software Engineer based in London, UK. I
                have very good experience of developing many types of fullstack
                application from anonymous web chat to ecommerce stores.
                <br />
                <br />
                I'm fascinated by beautiful interfaces, interesting projects
                with good ideas, creating perfect and high-performance
                applications.
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-1">My Tech Stack</h2>
              <h2 className="title-2">Frontend</h2>
              <p>
                JavaScript, TypeScript, ReactJS, Redux, Redux Toolkit, HTML,
                CSS, BootStrap, MaterialUI, ReactNative, GulpJS, Tailwind,
                Axios, HTMX
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>
                NodeJS, MySQL, MongoDB, ExpressJS, NestJS, Prisma, Docker, Jest,
                Jasmine, Websocket, Golang
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Additional</h2>
              <p>
                Adobe Photoshop, Adobe After Effects, Adobe Premiere Pro, Figma,
                Git, Agile, Scrum, TDD, Insomnia, PostMan
              </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}

export default opacityTransition(HomePage)
