import React from 'react'
import { Header } from 'components/header/Header'
import opacityTransition from 'utils/opacityTransition'
import {
  AftereffectsOriginal,
  AxiosPlain,
  BootstrapOriginal,
  CsharpOriginal,
  Css3Original,
  DockerOriginal,
  ExpressOriginal,
  FigmaOriginal,
  GitOriginal,
  GoOriginal,
  GulpPlain,
  Html5Original,
  InsomniaOriginal,
  JasmineOriginal,
  JavascriptOriginal,
  JestPlain,
  MaterialuiOriginal,
  MongodbOriginal,
  MysqlOriginal,
  NestjsOriginal,
  NextjsOriginal,
  NodejsOriginal,
  PhotoshopOriginal,
  PostgresqlOriginal,
  PostmanOriginal,
  PremiereproOriginal,
  PrismaOriginal,
  ReactOriginal,
  ReactnavigationOriginal,
  ReduxOriginal,
  SocketioOriginal,
  TailwindcssOriginal,
  TypescriptOriginal,
} from 'devicons-react'

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
              <div className="content-techStack">
                <JavascriptOriginal size="50" />
                <TypescriptOriginal size="50" />
                <ReactOriginal size="50" />
                <ReduxOriginal size="50" />
                <Html5Original size="50" />
                <Css3Original size="50" />
                <BootstrapOriginal size="50" />
                <MaterialuiOriginal size="50" />
                <ReactnavigationOriginal size="50" />
                <GulpPlain size="50" />
                <TailwindcssOriginal size="50" />
                <AxiosPlain size="50" />
                <NextjsOriginal size="50" />
              </div>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <div className="content-techStack">
                <NodejsOriginal size="50" />
                <MysqlOriginal size="50" />
                <MongodbOriginal size="50" />
                <ExpressOriginal size="50" />
                <NestjsOriginal size="50" />
                <PrismaOriginal size="50" />
                <DockerOriginal size="50" />
                <JestPlain size="50" />
                <JasmineOriginal size="50" />
                <SocketioOriginal size="50" />
                <GoOriginal size="50" />
                <NextjsOriginal size="50" />
                <CsharpOriginal size="50" />
                <PostgresqlOriginal size="50" />
              </div>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Additional</h2>
              <div className="content-techStack">
                <PhotoshopOriginal size="50" />
                <AftereffectsOriginal size="50" />
                <PremiereproOriginal size="50" />
                <FigmaOriginal size="50" />
                <GitOriginal size="50" />
                <InsomniaOriginal size="50" />
                <PostmanOriginal size="50" />
              </div>
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}

export default opacityTransition(HomePage)
