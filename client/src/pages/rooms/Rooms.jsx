import Roomstable from "../../components/datatable/Roomstable"
import Sidebar from "../../components/sidebar/Sidebar"
import "./rooms.scss"

const Rooms = () => {
  return (
    <div className="rooms">
        <Sidebar/>
        <div className="roomContainer">
            <div className="top">
             <h1>Rooms List</h1>
            </div>
            <div className="table">
                <Roomstable/>
            </div>
        </div>

    </div>
  )
}

export default Rooms