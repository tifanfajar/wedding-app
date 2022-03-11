import styles from '../../../styles/Admin.module.css'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useRouter } from 'next/router';
const AdminAdd = (props:any) => {
 const routes = useRouter()
 const handleBack = () => {
   routes.push(props.label[0].backUrl)
 }
 return (
  <div className={styles.containerContent + " cflex cffdc"}>
    <div className='cflex'>
      {(props.label[0].isForm) ? <ChevronLeftIcon className={styles.backArrow} onClick={handleBack}/> : ''}
       <h3 className='cf1'>{props.label[0].title}</h3>
       <div className='cflex cjcfe cf1'>
        {(props.select) ? 
          props.select.map((val:any, i: any) => {
            return (val.component)
          })
         : ''
        }
        <div className='btn-primary' onClick={props.handle}>{props.label[0].btnLabel}</div>
       </div>
    </div>
    <div className={styles.separator}></div>
    {props.child}
  </div>
 )
}
export default AdminAdd