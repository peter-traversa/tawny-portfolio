import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const style = {
  width: '100%',
  height: '480px',
  display: 'none',
}

const SecondPage = () => (
  <Layout>
    <Link to="/">Go back to the homepage</Link>
    <h1>Portraits</h1><br></br>
    <script src="https://cdn.jsdelivr.net/npm/publicalbum@latest/dist/pa-embed-player.min.js" async></script>
    <div class="pa-embed-player" style={style}
      data-link="https://photos.app.goo.gl/XWPDEcBHKQUGPiLT9"
      data-title="Headshots"
      data-description="5 new photos added to shared album">
      <img data-src="https://lh3.googleusercontent.com/uE9q4hNCslow5QmDRHhae6_yf4FPGWDBGl4RTWuswtiJn7tIWC6XfMwD0LJv3jTtn-U2wY93hODpWDsgysCvhp3nA2to8rVlNtJAVxshcuZb66wpvkpZznRVsWLq2veuPKqXYT9yWc0=w1920-h1080" src="" alt="" />
      <img data-src="https://lh3.googleusercontent.com/VAioSaJEeJzA9oOM4zsm5v6rWPwD3mCozO8uHOQfYnRxBj_AoZ0TTZpb0VhvRQ11IsvP1SEgZksHXRH5Bjdiv6iajgIoEgEQ3iB4_g698wWOLEbbkSdv9aE9M3wqunpKKkl8M6sW2HI=w1920-h1080" src="" alt="" />
      <img data-src="https://lh3.googleusercontent.com/ALk0tk2NYPFktJM8fzcAtT5wSG2iYbsBLrNuNROMpplh2Mws_BKPV7CQyHpcrYxDFrZRBya3tGCO7l1LXBWNF2QR2XqtJh5SJMtR_lZvtX4oLYgzbhv5IBBroEBZ7x_WE6Q7-gYnbP0=w1920-h1080" src="" alt="" />
      <img data-src="https://lh3.googleusercontent.com/29mLeR-FHlG_3HhiEtK9iMGE67pb7bO6EBiZrhC3ZYoabboPHkQvq3tmfWhyCiCpzP2zljSwGW_q46BOkxqa-CK5f8Ihus9WKqdQS1WmneI1ry3aiD1EfEMMvrLUJsPvPRF1q468yns=w1920-h1080" src="" alt="" />
      <img data-src="https://lh3.googleusercontent.com/_oURrgKvbGavj8Qsla_MyyT7Xve8_GHYeehxKqD7IrlkECEAraJhuSCXhdXlJjRwjLgbGN9luBolUqT53wSWxv6wAQpmY0h5vCMZyGGTQioPqH7uA3MyWjP0RmRWn1vy9mi-IFqICNc=w1920-h1080" src="" alt="" />
    </div>
  </Layout>
)

export default SecondPage
