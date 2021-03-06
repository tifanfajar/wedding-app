import type { NextPage } from 'next'
import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'

const Header: NextPage = () => {
  const [menus, setMenus] = useState([
    {label: 'Home', active: true, url: '/'},
    {label: 'Services', active: false, url: '/#services'},
    {label: 'Fitur', active: false, url: '/#our-service'},
    {label: 'Favourite', active: false, url: '/#most-like'}
  ])
  const [menuActive, setMenuActive] = useState(0)
  const navRef = useRef<HTMLInputElement>(null)
  const menuRef = useRef<HTMLInputElement>(null)
  const handleChangeMenu = (i:any) => {
    setMenuActive(i)
  }
  useEffect(() => {
    window.addEventListener('scroll', _ => {handleScroll(_)})
  })
  const handleScroll = (event: any) => {
   // var newMenus = menus
   // var x = 0
   var y = window.pageYOffset
   // var classNew = navRef?.current?.className
   if (y >= 450 && y < 1200) {
      // x = 1
      navRef?.current?.classList.add('scroll')
      setMenuActive(1)
   } 
   else if (y >= 1200 && y < 2000) {
    navRef?.current?.classList.add('scroll')
    setMenuActive(2)
   }
   else if (y >= 2000) {
    navRef?.current?.classList.add('scroll')
    setMenuActive(3)
   }
   else {
    navRef?.current?.classList.remove('scroll')
    setMenuActive(0)
     // document.querySelector(".nav-top").className = "nav-top";
   }
  }
  return (
    <div>
      <Head>
        <title>My Invitation</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <section className='nav-top' ref={navRef}>
        <div className='list-menu' ref={menuRef}>
          <ul >
          {
              menus.map((val, index) => {
                return (
                 <li className={((index === menuActive) ? 'active' : '')} id={`id-${index}`} key={`id-${index}`} ><Link href={val.url} key={index} scroll={true}><a onClick={_ => {handleChangeMenu(index)}} >{val.label} </a></Link></li>
                )
              })
           }
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Header
