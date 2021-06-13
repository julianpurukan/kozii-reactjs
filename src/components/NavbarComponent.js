import React from 'react'
import { Nav, NavDropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const NavbarComponent = () => {
  return (
    <nav class='navbar navbar-expand-lg bg-calmyorange navbar-dark fixed-top bg-calmyorange'>
      <div class='container'>
        <a class='navbar-brand' ><img src='https://www.kozii.id/web/img/logo.png' width='100' /></a>
        <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarsExample07' aria-controls='navbarsExample07' aria-expanded='false' aria-label='Toggle navigation'>
          <span class='navbar-toggler-icon' />
        </button>
        <div class='collapse navbar-collapse' id='navbarsExample07'>
          <ul class='navbar-nav mr-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <NavDropdown title='Produk' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Properti</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>Fashiom</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Makanan & Minuman</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.4'>Kecantikan</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.5'>KEsehatan</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.6'>UMKM</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.7'>Rumah Tangga</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#home'>Blog</Nav.Link>
            <Nav.Link href='#home'>Daftar Member</Nav.Link>
            <Nav.Link href='#home'>Masuk Akun</Nav.Link>
          </ul>
          <form method='GET' class='form-inline my-2 my-md-0'>
            <div class='easy-autocomplete'><input id='mainSearch' class='form-control mr-sm-2' type='text' placeholder='Cari Produk/Brand... ' aria-label='Search' size='50' autocomplete='off' /><div class='easy-autocomplete-container' id='eac-container-mainSearch'><ul /></div></div>
            <button class='btn btn-warning my-2 my-sm-0' type='submit'><FontAwesomeIcon icon={faSearch} /></button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default NavbarComponent
