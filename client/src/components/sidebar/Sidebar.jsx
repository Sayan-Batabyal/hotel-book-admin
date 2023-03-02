import "./Sidebar.scss"
import Usericon from '@mui/icons-material/PersonRounded';
import RoomsIcon from '@mui/icons-material/AirlineSeatIndividualSuiteRounded';
import {Link} from "react-router-dom"
const Sidebar = () => {
  return (
    <div className="sidebar">

        <div className="top">
            <Link to="/" style={{textDecoration:"none"}}>
            <span className="logo">MyHotels</span>
            </Link>
        
        </div>
        <hr />
        <div className="center">

                <ul>
                    <p className="title">Main</p>
                    <Link to="/users" style={{textDecoration:"none"}}>
                      <li>
                        <Usericon className="icon"/>
                        <span className="text">Bookings</span>
                      </li> 
                     </Link>
                    

                    <Link to="/rooms" style={{textDecoration:"none"}}>
                      <li>
                        <RoomsIcon className="icon"/>
                        <span className="text" >Rooms</span>
                      </li>
                    </Link>
                        
                </ul>

        </div>
        <div className="color"></div>

    </div>
  )
}


export default Sidebar