import Datatable from "../../components/datatable/Datatable"
import Sidebar from "../../components/sidebar/Sidebar"
import "./users.scss"

const users = () => {
  return (
    <div className="users">
        <Sidebar/>
        <div className="listcontainer">
        <div className="top">
        <h1>Your Bookings</h1>
        </div>
        <div className="table">
        <Datatable/>
        </div>
        </div>

    </div>
  )
}

export default users