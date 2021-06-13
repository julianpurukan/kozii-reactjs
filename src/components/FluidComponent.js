import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'

const FluidComponent = () => {
  return (
    <>
      <Container >
        <Navbar >
          <Nav className='mr-auto'>
            <Nav.Link href='#home'>Apa itu Kozii</Nav.Link>
            <Nav.Link href='#'>Cara Daftar</Nav.Link>
            <Nav.Link href='#'>Cara Transaksi</Nav.Link>
            <Nav.Link href='#'>Testimoni</Nav.Link>
            <Nav.Link href='#'>Video Tutorial</Nav.Link>
            <Nav.Link href='#'>Pelatihan</Nav.Link>
            <Nav.Link href='#'>Panduan Lengkap</Nav.Link>
          </Nav>

        </Navbar>
      </Container>

</>
  )
}

export default FluidComponent
