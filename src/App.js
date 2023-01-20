import React from 'react'
import Container from './components/container/Container'
import Footer from './components/Footer/Footer'
import Navbar from './components/navbar/Navbar'
import PageTitle from './components/page Title/PageTitle'
import "./main.scss"

const App = () => {
  return (
    <>
      <Navbar />
      <PageTitle />
      <Container />
      <Footer />
    </>
  )
}

export default App