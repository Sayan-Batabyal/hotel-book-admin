import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import {BookingCols} from "../../datasrc"
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import axios from "axios";
function Datatable() {
  const [list,setList] = useState([]);
  const {data}=useFetch("/user")
  
  useEffect(()=>{
    setList(data)
  },[data])

  const handleDelete= async (id)=>{
    try{
       await axios.delete(`/user/${id}`);
       setList(list.filter((item)=>item._id!==id));
    }catch(err){
      throw err;
    }
   
  };
  
  const action=[
    {
      field:"action",
      headerName:"Action",
      width:150,
      renderCell:(params)=>{
        return (
          <div className="action">
            <div className="edit">Edit</div>
            <div className="delete" onClick={()=>handleDelete(params.row._id)} >Delete</div>
          </div>
        )
      }
    }
  ]
  return (    
    <div className="datatable">
    <DataGrid className="data"
        rows={list} 
        columns={BookingCols.concat(action)}
        pageSize={6}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={row=>row._id}
      />
    </div>
  )
}

export default Datatable