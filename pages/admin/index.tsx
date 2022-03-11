import { useEffect } from "react"
import styles from "../../styles/Admin.module.css"
// import ThemeList from "./themeList"
import { useRouter } from "next/router"
const Admin = () => {
 const route = useRouter()
 useEffect(() => {
   route.push('admin/theme')
 },[])
 return (
  <div className={styles.loadingIndex + " cflex cjcc cffdc"}>Loading...</div>
 )
}

export default Admin