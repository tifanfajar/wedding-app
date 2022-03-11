import AdminAdd from '../admin-component/admin-add';
import Form from '../../form/form'
import { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import * as Actions from '../../store/actions'
const Add = (props: any) => {
 const label = useState({
   title: 'Add New Theme',
   backUrl: 'theme',
   isForm: true,
   btnLabel: 'Create'
 })
 useEffect(() => {
   var input = props.addTheme.AdminReducers.ThemeReducer.AddThemeFormReducer.map((v:any, i:any) => {
    if (v.key === 'category') {
     v.list = [{label: 'Birthday', value: 'birthday'}, {label: 'Wedding', value: 'wedding'}]
    }
    return v 
   })
   props.dispatch(Actions.changeForm(input))
   // console.log(props.addTheme.AdminReducers.ThemeReducer.AddThemeFormReducer)
 },[])
 const handleInput = (e: any) => {
  var input = props.addTheme.AdminReducers.ThemeReducer.AddThemeFormReducer.map((v:any, i:any) => {
   if (v.key === e.id) {
    v.value = e.value
   }
   return v 
  })
  // input[0].value = e.value
  // console.log(input)
   props.dispatch(Actions.changeForm(input))
 } 
 return (
   <AdminAdd label={{...label}} child={childs(props, handleInput)}/>
 )
}
const childs = (props:any, handleInput: any) => {
   return (
     <Form forms={props.addTheme.AdminReducers.ThemeReducer.AddThemeFormReducer} handleChange={handleInput}/>
   )
}
export default connect(state => ({
  addTheme: state
}))(Add)