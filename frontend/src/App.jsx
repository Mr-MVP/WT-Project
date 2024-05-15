import React from 'react'
import Navbar from './components/Navbar/Navbar'
import MainBody from './components/MainBody/MainBody'
import Programs from './components/Programs/Programs'
import Programs_2 from './components/Programs_2/Programs_2'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <MainBody/>
      <Programs_2/>
      <Programs/>
      <Footer/>
    </div>
  )
}

export default App