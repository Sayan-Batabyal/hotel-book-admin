import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { BookingCols } from "../../datasrc"
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
function Datatable() {
  const [list, setList] = useState([]);
  const { data } = useFetch("https://hotels-admin-api.cyclic.app/api/user")

  useEffect(() => {
    setList(data)
  }, [data])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://hotels-admin-api.cyclic.app/api/user/${id}`);
      toast.success("Booking Deleted",{theme:"colored",autoClose: 700,})
      setList(list.filter((item) => item._id !== id));
    } catch (err) {
      throw err;
    }

  };

  const action = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="action">
            <div className="edit"><Link style={{textDecoration:"none", color:"white"}} to={`${params.row._id}`}>Edit</Link></div>
            <div className="delete" onClick={() => handleDelete(params.row._id)} >Delete</div>
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
        getRowId={row => row._id}
      />
    </div>
  )
}

export default Datatable