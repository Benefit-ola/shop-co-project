import React from 'react'
import Nav from './NavBar'
import FooterPage from './footer'

const container = ({ children }) => {
  return (
    <>
     <div>
      <Nav/>
        {children}
      <FooterPage/>

      </div> 
    </>
  )
}

export default container
