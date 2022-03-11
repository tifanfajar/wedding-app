import React, { useState, useEffect } from "react"
import Navbar from "../../component/navbar"
import styles from "../../styles/Admin.module.css"
import dynamic from 'next/dynamic'
import {AdminConfs} from '../../component/admin/adminConf'
// let List = dynamic(() => import('../../component/admin/theme/list'))

import {useRouter} from 'next/router'

const ThemeList = () => {
 const {asPath} = useRouter()
 const [Component, setComponent] = useState({component: dynamic(() => import('../../component/admin/theme/list'))})
 
 useEffect(() => {
  AdminConfs.map((v, i)=> {
   // console.log(asPath)
    v.routes.map((val:any, index:any) => {
     if (asPath === val.path) {
      // List = val.Component
      // console.log(asPath)
      setComponent({component: val.Component})
     }
    })
  })
 }, [asPath])
 return (
  <div className={styles.containerAdmin}>
   <Navbar/>
   {/* <List/> */}
   <Component.component/>
  </div>
 )
}

export default ThemeList