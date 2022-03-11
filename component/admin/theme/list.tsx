import React, {useState, useEffect} from 'react'

import TableOddEven from '../../table/tableOddEven'
import * as Api from '../../../config/api'
import { useRouter } from 'next/router';
import AdminAdd from '../admin-component/admin-add';
import SelectOne from '../../select/select1'
import { connect } from 'react-redux'
const List = (props: any) => {
  const routes = useRouter()
  const label = useState({
   title: 'List Themes',
   backUrl: 'theme',
   isForm: false,
   btnLabel: 'Create Theme'
 })
  const [category, setCategory] = useState(
    [
      {label: 'Birthday', value: 'birthday'},
      {label: 'Wedding', value: 'wedding'},
    ]
  )
  // const [selectedCategory, setSelectedCategory] = useState(props.theme.AdminReducers.ThemeReducer.ThemeSelectCategoryReducer.value)
  const handleChange = (e: any) => {
    // console.log(e)
    // setSelectedCategory(e)
    // setSelectComp([...selectComp, {label: 'Category', component: selectCategory(selectedCategory, handleChange, category)}])
  }
  const [tbHead, setTbHead] = useState([
    {
       label: 'Theme Name', value: 'themename'
    },
    {
      label: 'Likes', value: 'likes'
    },
    {
      label: 'Category', value: 'category'
    },
    {
      label: 'Created Date', value: 'created_date'
    },
    {
      label: 'Updated Date', value: 'updated_date'
    },
    {
      label: 'Action', value: 'action'
    }
  ])
  const [tbBody, setTbody] = useState<any>({
    datas: [],
    messages: 'Loading...'
  })
  const [tbBodyTmp, setTbodyTmp] = useState({
     'themename': '',
     'likes': '',
     'category': '',
     'created_date': '',
     'updated_date': '',
     'action': ''
  })
  const getList = async () => {
    var url = 'theme/l'
    var param = '?category=' + props.theme.AdminReducers.ThemeReducer.ThemeSelectCategoryReducer.value + '&pages=' + pagination.page + '&size=' + pagination.perPage
    var data:any[] = []
    try {
      var resp = await Api.get(url, param)
      var json = await resp
      // console.log(json)
      if (json.data.data === null) {
       setTbody({datas: [], messages: 'success'})
      } else {
       // console.log(pagination.perPage - json.data.data.length)
       if (json.data.data.length < pagination.perPage) {
        // data = json.data.data
        for (let dd in json.data.data) {
           data.push({...json.data.data[dd], action: 'action'})
        }
        for (var i = json.data.data.length; i < pagination.perPage; i++) {
          data.push(tbBodyTmp)
        }
       }
       setTbody({datas: data, messages: 'success'})
      }
    } catch (error) {
       console.log(error)
    }
  }
  const getCount = async () => {
   var url = 'theme/c'
   var param = '?category=' + props.theme.AdminReducers.ThemeReducer.ThemeSelectCategoryReducer.value 
   try {
    var resp = await Api.get(url, param)
    var json = await resp
    if (json.data.data === null) {
     setTbody({datas: [], messages: 'success'})
    } else {
      setPagination({...pagination, total: json.data.data.total})
    }
  } catch (error) {
     console.log(error)
  }
  }
  const [pagination, setPagination] = useState({perPage: 10, page: 0, total: 0})
  const handlePage = (page: any) => {
   setPagination({...pagination, page})
  }
  const handlePerPage = (perPage: any) => {
   setPagination({...pagination, perPage})
  }
  useEffect(() => {
    getList()
    getCount()
    // console.log(props.theme.AdminReducers.ThemeReducer.ThemeSelectCategoryReducer)
  }, [])
  useEffect(() => {
    getList()
  }, [pagination, props.theme.AdminReducers.ThemeReducer.ThemeSelectCategoryReducer.value])
  const handleAdd = () => {
    routes.push('add-theme')
  }
  const [selectComp, setSelectComp] = useState([
    {label: 'Category', component: <SelectOne category={category} key={`key-1`}/>}
  ])
  return (
    <AdminAdd label={{...label}} handle={handleAdd} child={childs(tbHead,pagination,handlePage,handlePerPage,tbBody)} select={selectComp}/>
  )
}

const childs = (tbHead: any, pagination: any, handlePage: any, handlePerPage: any, tbBody: any) => {
 return (<TableOddEven Head={tbHead} pagination={pagination} pageChange={handlePage} perPageChange={handlePerPage} datas={tbBody}/>)
}
export default connect(state => ({
  theme: state
}))(List)