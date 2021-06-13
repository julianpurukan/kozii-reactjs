import React, { Component } from 'react'

export default class NewsLetter extends Component {
  render () {
    return (
      <div>
        <div class='newsletter'>
          <div class='container'>
            <div class='row'>
              <div class='col-sm-12'>
                <div class='content'>
                  <h2>Hemat Waktu Hemat Biaya</h2>
                  <h6 class='content-tuned'>Berlangganan dengan Kozii dapatkan Info menarik</h6>
                  <form method='post' action='https://www.kozii.id/subscribe'>
                    <input type='hidden' name='_token' value='z85gEJ7X8SngftgP3SQr1b5QTnfesak2KQYuZ0OA' />
                    <div class='input-group'> <input type='email' class='form-control' placeholder='Masukkan email untuk berlangganan.' />
                      <span class='input-group-btn'>
                        <button class='btn btn2' type='submit'>Subscribe</button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
