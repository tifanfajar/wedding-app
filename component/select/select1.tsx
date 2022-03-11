import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import * as Actions from '../store/actions'
import { connect } from 'react-redux'
const SelectOne = (props: any) => {
 const handleComp = (e:any) => {
   // console.log(e.target.value)
   props.dispatch(Actions.changeCategory({value: e.target.value}))
 }

 return (
  <FormControl sx={{ minWidth: 150 }} style={{marginRight: '1rem', height: '3rem', marginTop: '-.3rem'}}>
   <InputLabel id="demo-simple-select-label">Category</InputLabel>
    <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.select.AdminReducers.ThemeReducer.ThemeSelectCategoryReducer.value}
          label="category"
          onChange={handleComp}
          // input={<input style={{height: '3rem'}}/>}
        >
         {
          props.category.map((val:any, i: any) => {
           return (
            <MenuItem value={val.value} key={`key-${i}`}>{val.label}</MenuItem>
           )
          })
         }
     </Select>
  </FormControl>
 )
}

export default connect(state => ({
  select: state
}))(SelectOne)