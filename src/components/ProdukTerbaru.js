import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Carousel from 'react-grid-carousel'

export default class ProdukTerbaru extends Component {
  render () {
    return (

      <div>
        <Container>
          <div class='my-3 p-3 bg-white rounded'>
            <h6 class='pb-2 mb-0 textbold'>Produk Terbaru</h6>
            <div class='container'>
              <div class='row'>
                <div class='col-lg-12' style={{ marginTop: '20px' }}>
                  <Carousel cols={4} rows={1} gap={10} loop>
                    <Carousel.Item>
                      <img src='https://www.kozii.id/img/projects2/2021/02/19/6NntfywBv7jhzK2rg0JFnwxwoiu33w3c.jpg' alt='Trans Park Juanda' class='card-img-top img-fluid' />
                      <div class='card-body'><h5 class='card-title textcardbold'>Trans Park Juanda</h5></div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src='https://www.kozii.id/img/projects2/2021/06/04/kosPStgdCeeGso1euWvV5Lqaopo9sT4K.jpeg' alt='Hotel Ibis Senen Jakarta' class='card-img-top img-fluid' />
                      <div class='card-body'><h5 class='card-title textcardbold'>Hotel Ibis Senen Jakarta</h5></div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src='https://www.kozii.id/img/projects2/2021/05/05/UEn3xf6zU6nDMxHHiDiB6ZjmlCZd8Voz.jpeg' alt='Cluster Mutiara 17' class='card-img-top img-fluid' />
                      <div class='card-body'><h5 class='card-title textcardbold'>Cluster Mutiara 17</h5></div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src='https://www.kozii.id/img/projects2/2021/05/05/PGUwpg17KaKxLHnnu96ncQGmP7GZMZl2.jpeg' alt='CitraLand Cibubur' class='card-img-top img-fluid' />
                      <div class='card-body'><h5 class='card-title textcardbold'>CitraLand Cibubur</h5></div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src='https://www.kozii.id/img/projects2/2021/05/05/4JBN57hFF3U0AmUne7DueL04oG029JLK.jpeg' alt='Citraindah City' class='card-img-top img-fluid' />
                      <div class='card-body'><h5 class='card-title textcardbold'>Citraindah City</h5></div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src='https://www.kozii.id/img/projects2/2021/03/04/fd03rM5vhjWEqyGVnjz21aAEizGco0w1.png' alt='Kota Podomoro' class='card-img-top img-fluid' />
                      <div class='card-body'><h5 class='card-title textcardbold'  >Kota Podomoro</h5></div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src='https://www.kozii.id/img/projects2/2021/02/01/vf49vOkPRSWfoDOsYNZ1FWsy06hW0Uu6.jpg' alt='Permata Mutiara Maja' class='card-img-top img-fluid' />
                      <div class='card-body'><h5 class='card-title textcardbold'>Permata Mutiara Maja</h5></div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src='https://www.kozii.id/img/projects2/2021/02/19/W1nBl20jDzHf84kvtSL93ImOA3rXPHLu.jpg' alt='Evenciio Apartemen Margonda' class='card-img-top img-fluid' />
                      <div class='card-body'><h5 class='card-title textcardbold'>Evenciio Apartemen Margonda</h5></div>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </Container>

      </div>
    )
  }
}
