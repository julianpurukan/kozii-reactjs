import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export default class MainProdukComponent extends Component {
  render () {
    return (
      <div>
        <Container>
          <div class='my-3 p-3 bg-white rounded'>
            <div class='container mainproduk'>
              <div class='row justify-content-sm-center'>
                <div class='col text-center linkedpro mb-3'>
                  <a href='#'>
                    <img src='https://www.kozii.id/web/img/icon/icon-properti.png' alt='Properti' width='64' class='iconproduk' />
                    <br />
                    <span class='linkfooter'>Properti</span>
                  </a>
                </div>
                <div class='col text-center linkedpro mb-3'>
                  <a href='#'>
                    <img src='https://www.kozii.id/web/img/icon/icon-fashion.png' alt='Fashion' width='64' class='iconproduk' />
                    <br />
                    <span class='linkfooter'>Fashion</span>
                  </a>
                </div>
                <div class='col text-center linkedpro mb-3'>
                  <a href='#'>
                    <img src='https://www.kozii.id/web/img/icon/icon-fnb.png' alt='Makanan &amp; Minuman' width='64' class='iconproduk' />
                    <br />
                    <span class='linkfooter'>Makanan &amp; Minuman</span>
                  </a>
                </div>
                <div class='col text-center linkedpro mb-3'>
                  <a href='#'>
                    <img src='https://www.kozii.id/web/img/icon/icon-kecantikan.png' alt='Kecantikan' width='64' class='iconproduk' />
                    <br />
                    <span class='linkfooter'>Kecantikan</span>
                  </a>
                </div>
                <div class='col text-center linkedpro mb-3'>
                  <a href='#'>
                    <img src='https://www.kozii.id/web/img/icon/icon-kesehatan.png' alt='Kesehatan' width='64' class='iconproduk' />
                    <br />
                    <span class='linkfooter'>Kesehatan</span>
                  </a>
                </div>
                <div class='col text-center linkedpro mb-3'>
                  <a href='#'>
                    <img src='https://www.kozii.id/web/img/icon/icon-umkm.png' alt='UMKM' width='64' class='iconproduk' />
                    <br />
                    <span class='linkfooter'>UMKM</span>
                  </a>
                </div>
                <div class='col text-center linkedpro mb-3'>
                  <a href='#'>
                    <img src='https://www.kozii.id/web/img/icon/icon-rumahtangga.png' alt='Rumah Tangga' width='64' class='iconproduk' />
                    <br />
                    <span class='linkfooter'>Rumah Tangga</span>
                  </a>
                </div>
                <div class='col text-center linkedpro mb-3'>
                  <a href='#'>
                    <img src='https://www.kozii.id/web/img/icon/icon-finance.png' alt='Keuangan' width='64' class='iconproduk' />
                    <br />
                    <span class='linkfooter'>Keuangan</span>
                  </a>
                </div>
                <div class='col text-center linkedpro mb-3'>
                  <a href='#'>
                    <img src='https://www.kozii.id/web/img/icon/icon-jasa.png' alt='Jasa' width='64' class='iconproduk' />
                    <br />
                    <span class='linkfooter'>Jasa</span>
                  </a>
                </div>
              </div>
              <hr class='featurette-divider' />
            </div>
          </div>
        </Container>
      </div>
    )
  }
}
