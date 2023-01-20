import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import "./container.scss"
import Section3 from './Section3'
import Section4 from './Section4'

const Container = () => {
  return (
    <div className='container'>
        <Section1 />
        <Section2 />
        <Section3/>
        <Section4/>
    </div>
  )
}

export default Container