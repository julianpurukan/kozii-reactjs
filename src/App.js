import React, { Component } from 'react'
// import NavbarComponent from './components/NavbarComponent'
import NavbarComponent from './components/NavbarComponent'
import FluidComponent from './components/FluidComponent'
import CarouselComponent from './components/CarouselComponent'
import MainProdukComponent from './components/MainProdukComponent'
import PromoMenarikComponent from './components/PromoMenarikComponent'
import ProdukTerbaru from './components/ProdukTerbaru'
import ProdukComponent from './components/ProdukComponent'
import ServiceApartement from './components/ServiceApartement'
import NewsLetter from './components/NewsLetter'
import FooterComponent from './components/FooterComponent'
import CookieConsen from 'react-cookie-consent'
import swDev from './swDev'

export default class App extends Component {
  render () {
    return (
      <div>
        {/* <NavbarComponent /> */}
        <NavbarComponent />
        <FluidComponent />
        <CarouselComponent />
        <body class='bg-light'>
          <MainProdukComponent />
          <PromoMenarikComponent />
          <ProdukTerbaru />
          <ProdukComponent />
          <ServiceApartement />
          <NewsLetter />
        </body>
        <FooterComponent />
        <CookieConsen
          debug
          location='bottom'
          style={{ background: '#fd5d31', textAlign: 'left' }}
          buttonStyle={{ color: '#000', background: '#ffff' }}
          buttonText='Izinkan'
          expires={365}
        >
           Pengalaman anda pada situs ini akan meningkat dengan cara mengizinkan cookies
        </CookieConsen>

      </div>
    )
  }
}
swDev()
