import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, useNavigation } from 'react-router-dom'

function Applayout() {

  const navigation = useNavigation();
  //console.log(navigation.state);

  if(navigation.state === "loading") return <div>Loading .....</div>

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Applayout
