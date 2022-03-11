import type { NextPage } from 'next'
import {useState} from 'react'
import styles from '../styles/Admin.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
const Navbar: NextPage = () => {
  const [menus,setMenus] = useState([
    {label: 'Themes', url: 'theme'},
    {label: 'Pages', url: 'pages'},
    {label: 'User', url: 'user'}
  ])
  const route = useRouter()
  const [menuActive, setMenuActive] = useState(0)
  return (
   <div className={styles.navbar + " cflex cffdc"}>
     <div className={styles.containerName + ' cflex cjcc'}>
      <div className={"cflex cffdc"}>
       <div className={styles.imgProfile}>
        <Image src={require('../public/images/profile.png')}/>
       </div>
       <span>Hi, Admin</span>
      </div>
     </div>
     <div className={"cflex cffdc " + styles.containerMenu}>
       <ul>
         {menus.map((val, i) => {
           return (
            <li className={(menuActive === i) ? styles.active : ''} id={`id-${i}`} key={`key-${i}`} onClick={_ => {route.push(val.url);setMenuActive(i)}}>{val.label}</li>
           )
         })}
       </ul>
     </div>
   </div>
  )
}

export default Navbar