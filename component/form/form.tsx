import styles from '../../styles/Admin.module.css'
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import MobileDateTimePicker from '@mui/lab/MobileDateTimePicker';
import Select from '@mui/material/Select';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Checkbox from '@mui/material/Checkbox';
import dynamic from "next/dynamic"
const MapOne = dynamic(() => import("../map/map"), { ssr: false });
import AdapterDateFns from '@mui/lab/AdapterDateFns';
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
         // <FormControl fullWidth key={`key-${i}`}>
          <div key={`key-${i}`}>
           <Checkbox  checked={val.value} onClick={_ => handleOnchange({target: {id: val.key, value: !val.value}})}/>
           <span>{val.label}</span>
          </div>
         // </FormControl>
        )
      }
      default: {
        return (<div key={`key-${i}`}></div>)
      }
     }

    })
   }
   return (
    <div className={styles.tblContainer + " cflex cjcsb cffdc"}>
     <div className={styles.formOne}>
      {innerForm()}
      </div>
      {(props.isMap && typeof window !== "undefined") ? <div className={styles.mapContainer}><MapOne onDrag={handleOnchange} data={props.forms}/></div> : ''}
    </div>
   )
}

export default Form