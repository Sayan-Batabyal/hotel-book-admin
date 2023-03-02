import "./roomstable.scss"
import { DataGrid } from '@mui/x-data-grid';
import {RoomsRow,RoomsCols} from "../../datasrc"

const Roomstable = () => {
  return (
    <div className="roomTable">
         <DataGrid className="data"
        
        rows={RoomsRow} 
        columns={RoomsCols}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
      />
    </div>
  )
}

export default Roomstable