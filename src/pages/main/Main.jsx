import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/navbar/hero/Hero'
import Details from '../../components/navbar/company details/Details'
import Business from '../../components/navbar/business/Business'
import Payment from '../../components/payment/Payment'
import Card from '../../components/card/Card'
import About from '../../components/about/About'
import Profile from '../../components/profile/Profile'
import Stocks from '../../components/stockexchanges/Stocks'
import Services from '../../components/servicestry/Services'
import Contacts from '../../components/contact/Contacts'
import Footer from '../../components/footer/Footer'
const Main = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Details />
      <Business />
      <Payment />
      <Card />
      <About />
      <Profile />
      <Stocks />
      <Services />
      <Contacts />
      <Footer />
    </>
  )
}

export default Main
