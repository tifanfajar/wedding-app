
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Header from '../component/Header'
const Home: NextPage = () => {
  const [images, setImages] = useState([
    {image: '/images/couple1.jpg'},
    {image: '/images/couple2.jpg'},
    {image: '/images/couple3.jpg'}
  ])
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    var newChange = current
    setTimeout(() => {
      if (newChange === images.length - 1) {
         newChange = 0
      } else {
         newChange = newChange + 1
      }
      setCurrent(newChange)
      // console.log(images)
    }, 7000)
  }, [current])
  
  return (
    <div>
      <Header />
      <div className='container-body'>
        <section className='section-one'>
          <div className='container-text'>
            <h1 className='cflex cf1'>Sebarkan undangan tanpa batas jarak dan jumlah</h1>
            <span className='cflex cf1'>dengan banyak pilihan tema untuk berbagai acara dengan proses yang cepat, pesan sekarang sebarkan nanti, tanpa adanya batasan jumlah undangan yang disebar kami adalah solusi undangan untuk segala acara kamu</span>
            <div className='btnContainer cf9'>
             <div className='inner'>
               <div className='btn-primary'>Pesan Sekarang</div>
             </div>
            </div>
          </div>
          <div className='cover'></div>
          <div className={'bg'} style={{ backgroundImage: `url(${images[current].image})`}}></div>
        </section>
        <section className='section-two' id="our-service" style={{backgroundImage: `url('/images/leaf1.jpg')`, backgroundSize: 'cover'}}>
          <div className='cover'></div>
          <div className='container-grid inner-section-two'>
             <div className='container-text-2'>
                {/* <h1>TES</h1> */}
                <h1>Ini</h1>
             </div>
             {/* <span>tes2</span> */}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
