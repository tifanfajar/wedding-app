import styles from './card1.module.css'
import Image from 'next/image'
import Button from '@mui/material/Button';
interface cardChild {
   title: string;
   images: string;
}
const CardOne = (props:cardChild) => {
   return (
      <div className={styles.containerCardOne}>
        <p className={styles.titleCard}>{props.title}</p>
        <div  className={styles.imageContainer}>
         <Image src={require('../../../public' + props.images)} className={styles.imgCard}/>
        </div>
        <div className={'btn-primary ' + styles.btnContainer}>View Demo</div>
      </div>
   )
}

export default CardOne