
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Header from '../component/Header'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import {useRouter} from 'next/router';
import TemplateList from '../component/list-template/TemplateList';
const Home: NextPage = () => {
  const [images, setImages] = useState([
    {image: '/images/couple1.jpg'},
    {image: '/images/event1.jpg'},
    {image: '/images/couple2.jpg'},
    {image: '/images/event2.jpg'}
  ])
  const router = useRouter()
  const [current, setCurrent] = useState(0)
  const [undanganSebar, setUndanganSebar] = useState({
    min: 0,
    max: 1020000
  })
  const [undanganBuat, setUndanganBuat] = useState({
    min: 0,
    max: 8000
  })
  const [listFitur, setListFitur] = useState([
    {label: 'Tema Baru Setiap Minggu'},
    {label: 'Tema Elegant dan Kasual'},
    {label: 'Masa Aktif Selamanya'},
    {label: 'Bebas Edit Tanggal'},
    {label: 'Responsive Semua Device'},
    {label: 'Proses Cepat'},
    {label: 'Cover'},
    {label: 'Quotes Doa'},
    {label: 'Map Lokasi'},
    {label: 'RSVP'},
    {label: 'Dompet Online'},
    {label: 'Pop Up Protokol Kesehatan'},
    {label: 'Fitur Kirim Undangan'},
    {label: 'Love Story'},
    {label: 'Ucapan dan Doa Restu'},
    {label: 'Countdown Event'},
    {label: 'Gallery Foto'},
    {label: 'Musik (*Opsional'},
  ])
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
    }, 6000)
  }, [current])

  useEffect(() => {
   var min = undanganSebar.min
   var max = undanganSebar.max
   var minBuat = undanganBuat.min
   var maxBuat = undanganBuat.max
   var addSebar = 100
   var addBuat = 100
   const interval = setInterval(() => {
    if (min < max) {
       min = min + addSebar
       // console.log(min)
       addSebar = addSebar + 1021
       // console.log(addSebar)
    }
    if (minBuat < maxBuat) {
       minBuat = minBuat + addBuat
       addBuat = addBuat + 12
    }
    setUndanganBuat({...undanganBuat, min: minBuat})
    setUndanganSebar({...undanganSebar, min})
   }, 50);
   return () => clearInterval(interval);
  }, [])
  const openCatalog = () => {
     router.push('catalog')
  }
  const buyNow = () => {
     window.open('https://wa.me/6285697968329?text=hallo demas saya ingin pesan', '_blank')
  }
  return (
    <div>
      <Header />
      <div className='container-body'>
        <section className='section-one'>
          <div className='container-text'>
            <h1 className='cflex cf1 fade-in-slide-top'>Sebarkan undangan tanpa batas jarak dan jumlah</h1>
            <span className='cflex cf1 fade-in-slide-right'>dengan banyak pilihan tema untuk berbagai acara dengan proses yang cepat, pesan sekarang sebarkan nanti, tanpa adanya batasan jumlah undangan yang disebar kami adalah solusi undangan untuk segala acara kamu</span>
            <div className='btnContainer cf9 fade-in-slide-top'>
             <div className='inner'>
               <div className='btn-primary ' onClick={_ => buyNow()}>Pesan Sekarang</div>
             </div>
            </div>
          </div>
          <div className='cover'></div>
          {
             images.map((val, index) => {
               return <div className={'bg'} key={`bg-${index}`} style={{ backgroundImage: `url(${val.image})`, display: ((current !== index) ? 'none' : '')}}></div>
             })
          }
        </section>
        <section className='section-onehalf' id="services">
          <div className='grid-section-half cflex cf1 cjcc'>
            <div className='cflex cf1 cjcc'>
               <div className='cflex cffdc text-container-3'>
                <div className='icon-container'>
                  <MonetizationOnIcon style={{fontSize: '9rem'}}/>
                </div>
                <h3>Biaya Desain dan Pembuatan Terjangkau.</h3>
                <span>Dengan memsan undangan digital dari [nama] maka kamu bisa menghemat biaya untuk pencetakan undangan.</span>
               </div>
            </div>
            <div className='cflex cf1 cjcc'>
               <div className='cflex cffdc text-container-3'>
                <div className='icon-container'>
                  <DeliveryDiningIcon style={{fontSize: '9rem'}}/>
                </div>
                <h3>Penyebaran Undangan Secara Digital.</h3>
                <span>Penyebaran undangan dapat dilakukan hanya dalam genggaman sehingga dapat menghemat waktu serta biaya yang dikeluarkan jika penyebaran secara offline.</span>
               </div>
            </div>
            <div className='cflex cf1 cjcc'>
               <div className='cflex cffdc text-container-3'>
                <div className='icon-container'>
                  <MoreTimeIcon style={{fontSize: '9rem'}}/>
                </div>
                <h3>Proses Pengerjaan yang Cepat.</h3>
                <span>Pengerjaan undangan digital dari [nama] hanya berdasarkan hitungan menit, sehingga jika terjadi perubahan jadwal acara maka tim kami siap membantu.</span>
               </div>
            </div>
          </div>
          <div className='cek-catalog-container cflex cf1 cjcc'>
            <div className='btn-primary' onClick={_ => openCatalog()}><ArrowCircleRightIcon style={{marginLeft: '-1rem', marginTop: '1px', marginRight: '3px', fontSize: '1.1rem', position: 'absolute'}}/> <span style={{marginLeft: '3px'}}>Buka Catalog</span></div>
          </div>
        </section>
        <section className='section-two' id="our-service" style={{backgroundImage: `url('/images/leaf1.jpg')`, backgroundSize: 'cover'}}>
          <div className='cover'></div>
          <div className='container-grid inner-section-two'>
             <div className='container-text-2'>
                <h1>Fitur undangan digital</h1>
                <span>Undangan digital dapat mempermudah dalam penyebaran undangan tanpa harus terbatas jarak dan kuantitas tamu undangan. Undangan digital dari [nama] memiliki berbagai fitur yang menarik dengan tujuan untuk mempermudah tamu undangan dalam memahami segala hal yang berhubungan dengan acara.</span>
                <div className='grid-inner'>
                  <div className='container-fitur'>
                     <ul>
                       {
                         listFitur.map((val, index) => {
                           if (index < 9) {
                             return <li key={`key-${index}`}><CheckCircleOutlineIcon/> {val.label}</li>
                           }
                         })
                       }
                     </ul>
                  </div>
                  <div className='container-fitur'>
                     <ul>
                       {
                         listFitur.map((val, index) => {
                           if (index >= 9) {
                             return <li key={`key-${index}`}><CheckCircleOutlineIcon/> {val.label}</li>
                           }
                         })
                       }
                     </ul>
                  </div>
                </div>
             </div>
             <div className='container-text-2'>
               <h1>Our Experienced</h1>
               <span>Kesibukan membuat kita semua tidak memiliki cukup waktu untuk mengantarkan undangan event kepada para tamu undangan, sehingga pilihan untuk menggunakan undangan online menjadi hal yang sangat membantu, kami disini menjawab semua tantangan tersebut.</span>
               <div className='grid-inner'>
                  <div className='container-fitur'>
                     <div className='container-exp'>
                       <h3>{undanganBuat.min}</h3>
                        <span>Undangan Dibuat</span>
                     </div>
                  </div>
                  <div className='container-fitur'>
                     <div className='container-exp'>
                       <h3>{undanganSebar.min}</h3>
                       <span>Undangan Disebar</span>
                     </div>
                  </div>
                </div>
             </div>
          </div>
        </section>
        <section className='section-three' id="most-like">
          <div className='first-div'></div>
          <div className='second-div'></div>
          <div className='third-div'></div>
          <div className='fourth-div'>
              <TemplateList/>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
