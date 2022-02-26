import { NextPage } from "next";
import styles from '../../styles/Template.module.css'
import CardOne from "../card/card1/card1";
const TemplateList: NextPage = (props: any) => {
   return (
    <div className={styles.containerTemplate}>
      <div className={styles.gridTemplate}>
        <CardOne title={'Title Baru'} images={'/images/couple1.jpg'}/>
      </div>
    </div>
   )
}

export default TemplateList