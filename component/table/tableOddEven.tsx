import TablePagination from '@mui/material/TablePagination';
import styles from '../../styles/Admin.module.css'
import {propIn} from '../interface/tableInterFace'

const TableOddEven = (props: propIn) => {
 // console.log(props.Head.length)
 const handleChangePage = (e:any, newPage: any) => {
   // console.log(newPage)
   props.pageChange(newPage)
 }
 const handleChangeRowsPerPage = (e:any) => {
   // console.log(newPage)
   props.perPageChange(e.target.value)
 }
return <div>
  <div className={styles.tblContainer}>
   <table className={styles.tblOddEven}>
   <thead>
    <tr>
      {
        props.Head.map((val:any, index:any) => {
          return (
           <td key={`key-${index}`} style={{width: 'calc(((1/' + (props.Head.length) + ') * 100%) / ' + props.Head.length + ')'}}>{val.label}</td>
          )
        })
      }
    </tr>
   </thead>
    <tbody>
      {
       (props.datas.messages === 'Loading..') ? <tr><td colSpan={props.Head.length} style={{textAlign: 'center'}}>Loading..</td></tr>
        : (props.datas.datas.length === 0) ? <tr><td colSpan={props.Head.length} style={{textAlign: 'center'}}>No Data Available</td></tr>
         : props.datas.datas.map((v:any, i:any) => {
           return (
              <tr key={`key-tr-${i}`}>
                 {
                  props.Head.map((val:any, index:any) => {
                   if (v[val.value]) {
                     return (
                      <td key={`key-${index}`} style={{width: 'calc(((1/' + (props.Head.length) + ') * 100%) / ' + props.Head.length + ')'}}>{v[val.value]}</td>
                     )
                   } else {
                    return (
                     <td key={`key-${index}`} style={{width: 'calc(((1/' + (props.Head.length) + ') * 100%) / ' + props.Head.length + ')'}}></td>
                    )
                   }
                  })
                }
              </tr>
           )
        })
      }
    </tbody>
   </table>
  </div>
   <table className={'cflex cjcfe'}>
    <tfoot>
     <tr>
      <TablePagination
         rowsPerPageOptions={[5, 10, 15]}
         colSpan={3}
         count={props.pagination.total}
         rowsPerPage={parseInt(props.pagination.perPage)}
         page={props.pagination.page}
         SelectProps={{
           inputProps: {
             'aria-label': 'rows per page',
           },
           native: true
         }}
         onPageChange={handleChangePage}
         onRowsPerPageChange={handleChangeRowsPerPage}
       />
      </tr>
     </tfoot>
   </table>
  </div>
}

export default TableOddEven