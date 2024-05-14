import React from 'react'
import Navbar from '../components/Navbar/navbar'
import MainBody from '../components/MainBody/MainBody'
import Programs from '../components/Programs/Programs'
import Programs_2 from '../components/Programs_2/Programs_2'
const App = () => {
    return (
        <div>
            <Navbar />
            <MainBody />
            <Programs_2 />
            <Programs />
        </div>
    )
}

export default App