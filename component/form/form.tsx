import styles from '../../styles/Admin.module.css'
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import MobileDateTimePicker from '@mui/lab/MobileDateTimePicker';
import Select from '@mui/material/Select';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import { FormControl } from '@mui/material';
// import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { FormControl } from '@mui/material';
const Form = (props: any) => {
   const handleOnchange = (e:any) => {
      props.handleChange({value: e.target.value, id: e.target.id})
   }
   const innerForm = () => {
    return props.forms.map((val:any, i:any) => {
     switch (val.type) {
      case 'input' : {
        return (
         <TextField fullWidth id={val.key} label={val.label} disabled={val.isDisabled} key={val.key} variant="outlined" value={val.value} onChange={handleOnchange}/>
        )
      }
      case 'select' : {
       return (
         <Select
           displayEmpty
           id={val.key}
           key={`key-${i}`}
           value={val.value}
           input={<OutlinedInput />}
           onChange={e => handleOnchange({target: {value: e.target.value, id: val.key}})}
           inputProps={{ 'aria-label': 'Without label' }}
         >
           <MenuItem disabled value="">
             <em>{val.label}</em>
           </MenuItem>
           {val.list.map((v:any, index:any) => {
             return (<MenuItem value={v.value} key={`key-${index}`}>{v.label}</MenuItem>)
           })}
         </Select>
       )
      }
      case 'datetime' : {
       return (
        // <div key={`key-${i}`}>tes</div>
        <LocalizationProvider dateAdapter={AdapterDateFns} key={`key-${i}`}>
         <MobileDateTimePicker
           value={val.value}
           onChange={(newValue: any) => {
             handleOnchange({target: {id: val.key, value: newValue}});
           }}
           renderInput={(params: any) => <TextField {...params} />}
         />
         </LocalizationProvider>
       )
      }
      case 'check': {
        return (
         <FormControl fullWidth key={`key-${i}`}>
           <FormControlLabel control={<Checkbox defaultChecked />} label={val.label} checked={val.value} onClick={_ => handleOnchange({target: {id: val.key, value: !val.value}})}/>
         </FormControl>
        )
      }
      default: {
        return (<div key={`key-${i}`}></div>)
      }
     }
    })
   }
   return (
    <div className={styles.tblContainer + " cflex cjcsb"}>
     <div className={styles.formOne}>
      {innerForm()}
      </div>
    </div>
   )
}

export default Form