import AdminAdd from '../admin-component/admin-add';
import Form from '../../form/form'
import { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import * as Actions from '../../store/actions'
import * as Api from '../../../config/api'
import moment from 'moment'
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
 const handleAdd = () => {
   var jsonSent = {}
   var empty:any = {}
   props.addTheme.AdminReducers.ThemeReducer.AddThemeFormReducer.map((val: any, i: any) => {
     if (val.value !== '') {
      if (val.key !== 'none') {
        if (val.type === 'datetime') {
         jsonSent = {...jsonSent, [val.key]: moment(val.value).format('YYYY-MM-DD H:mm:ss')}
        }
        else if (val.type === 'check') {
         jsonSent = {...jsonSent, [val.key]: (val.value) ? '1' : '0'}
        }
        else if (val.key === 'longitude' || val.key === 'latitude') {
         jsonSent = {...jsonSent, [val.key]: val.value.toString()}
        } else {
         jsonSent = {...jsonSent, [val.key]: val.value}
        }
      }
     } else {
        empty = {...empty, [val.key]: {'label': val.label, 'key': val.key}}
     }
   })
   if (Object.keys(empty).length < 1) {
    console.log(jsonSent)
    jsonSent = {...jsonSent,"iduser": "1"}
    var url = Api.golangWedding + 'theme/create'
    var param = ''
    Api.postJson(url, param, JSON.stringify(jsonSent))
   } else {
    console.log(Object.keys(empty).length)
   }
 }
 return (
   <AdminAdd label={{...label}} child={childs(props, handleInput)} handle={handleAdd}/>
 )
}
const childs = (props:any, handleInput: any) => {
   return (
     <Form forms={props.addTheme.AdminReducers.ThemeReducer.AddThemeFormReducer} handleChange={handleInput} isMap={true}/>
   )
}
export default connect(state => ({
  addTheme: state
}))(Add)