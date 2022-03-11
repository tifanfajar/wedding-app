import { NextPage } from "next";
import styles from '../../styles/Template.module.css'
import CardOne from "../card/card1/card1";
import { connect } from 'react-redux'
import { useEffect } from "react";
import * as Action from '../store/actions'
const TemplateList: NextPage = (props: any) => {
   useEffect(() => {
      // props.dispatch(Action.cardActions({title: 'Ubah Title 2', image: '/images/couple2.jpg'}))
      var data = {
         listData: [
            {title: 'catalog 1', image: '/images/couple2.jpg'},
            {title: 'catalog 2', image: '/images/couple1.jpg'},
            {title: 'catalog 3', image: '/images/couple3.jpg'}
         ]
      }
      props.dispatch(Action.changeListTemplate(data))
   },[])
   return (
    <div className={styles.containerTemplate}>
      <div className={styles.gridTemplate}>
        {
           props.template.listTemplateReducer.listData.map((val:any, index:Number) => {
              return (
               <CardOne title={val.title} key={`key-${index}`} images={val.image}/>
              )
           })
        }
      </div>
    </div>
   )
}

export default connect(state => ({
 template: state
}))(TemplateList)