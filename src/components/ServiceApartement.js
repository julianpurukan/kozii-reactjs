import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Carousel from 'react-grid-carousel'
export default class ServiceApartement extends Component {
  render () {
    return (
      <Container>
        <div class='my-3 p-3 bg-white rounded'>
          <h6 class='pb-2 mb-0 textbold'>Service Apartemen Pilihan</h6>
          <div class='container'>
            <div class='row'>
              <div class='col-lg-12' style={{ marginTop: '20px;' }}>
                <div id='servicepartemen' class='carousel slide' data-ride='carousel' data-interval='false'>
                  <Carousel cols={4} rows={1} gap={10} loop>
                    <Carousel.Item>
                      <img class='card-img-top img-fluid' src='https://www.kozii.id/web/img/kota/jakarta.jpg' alt='Card image cap' />
                      <div class='card-body'><h5 class='card-title textcardbold'>Jakarta</h5></div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img class='card-img-top img-fluid' src='https://www.kozii.id/web/img/kota/bali.jpg' alt='Card image cap' />
                      <div class='card-body'><h5 class='card-title textcardbold'>Bali</h5></div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img class='card-img-top img-fluid' src='https://www.kozii.id/web/img/kota/bandung.jpeg' alt='Card image cap' />
                      <div class='card-body'><h5 class='card-title textcardbold'>Bandung</h5></div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img class='card-img-top img-fluid' src='https://www.kozii.id/web/img/kota/surabaya.jpg' alt='Card image cap' />
                      <div class='card-body'><h5 class='card-title textcardbold'>Surabaya</h5></div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img class='card-img-top img-fluid' src='https://www.kozii.id/web/img/kota/batam.jpg' alt='Card image cap' height='156' />
                      <div class='card-body'><h5 class='card-title textcardbold'>Citraindah City</h5></div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src='https://www.kozii.id/img/projects2/2021/03/04/fd03rM5vhjWEqyGVnjz21aAEizGco0w1.png' alt='Kota Podomoro' class='card-img-top img-fluid' />
                      <div class='card-body'><h5 class='card-title textcardbold' >Batam</h5></div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img class='card-img-top img-fluid' src='https://www.kozii.id/web/img/kota/bogor.jpg' alt='Card image cap' />
                      <div class='card-body'><h5 class='card-title textcardbold'>Bogor</h5></div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img class='card-img-top img-fluid' src='https://www.kozii.id/web/img/kota/depok.jpg' alt='Card image cap' />
                      <div class='card-body'><h5 class='card-title textcardbold'>Depok</h5></div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img class='card-img-top img-fluid' src='https://www.kozii.id/web/img/kota/malang.jpg' alt='Card image cap' />
                      <div class='card-body'><h5 class='card-title textcardbold'>Malang</h5></div>
                    </Carousel.Item>
                  </Carousel>
                  <a class='carousel-control-prev' href='#servicepartemen' role='button' data-slide='prev'>
                    <span class='carousel-control-prev-icon' aria-hidden='true' />
                    <span class='sr-only'>Previous</span>
                  </a>
                  <a class='carousel-control-next' href='#servicepartemen' role='button' data-slide='next'>
                    <span class='carousel-control-next-icon' aria-hidden='true' />
                    <span class='sr-only'>Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    )
  }
}
