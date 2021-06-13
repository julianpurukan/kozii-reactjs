import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
export default class PromoMenarikComponent extends Component {
  render () {
    return (
      <div>
        <Container>
          <div class='my-3 p-3 bg-white rounded'>
            <h6 class='pb-2 mb-0 textbold'>Promo Menarik</h6>
            <div class='container'>
              <div class='row'>
                <div class='col-lg-12' style={{ marginTop: '20px' }}>
                  <div id='ads' class='carousel slide' data-ride='carousel' data-interval='false'>
                    <div class='carousel-inner'>
                      <div class='carousel-item carousel-promo-home  active '>
                        <div class='col-md-4 btmspace' style={{ float: 'left' }}>
                          <a href='#'><img src='https://www.kozii.id/img/promo/2021/06/10/KIG5YAf19VODfRJhUq9WmiWq2xBFNI6h.jpg' alt='Diskon Makanan' class='card-img-top' width='319' height='319' /></a>
                        </div>
                        <div class='col-md-4 btmspace' style={{ float: 'left' }}>
                          <a href='#'><img src='https://www.kozii.id/img/promo/2021/06/11/0C0avH7fIn5SzSZAROu2ABrE37N4JLRP.jpg' alt='Diskon Makanan' class='card-img-top' width='319' height='319' /></a>
                        </div>
                        <div class='col-md-4 btmspace' style={{ float: 'left' }}>
                          <a href='#'><img src='https://www.kozii.id/img/promo/2021/01/31/zMLSGf5AgILjWRkWz3rIQ3mc98UfqZwO-baru.jpg' alt='EVENCIIO APARTMENT' class='card-img-top' width='319' height='319' /></a>
                        </div>
                      </div>
                    </div>
                    <a class='carousel-control-prev' role='button' data-slide='prev'>
                      <span class='carousel-control-prev-icon' aria-hidden='true' />
                      <span class='sr-only'>Previous</span>
                    </a>
                    <a class='carousel-control-next' role='button' data-slide='next'>
                      <span class='carousel-control-next-icon' aria-hidden='true' />
                      <span class='sr-only'>Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}
