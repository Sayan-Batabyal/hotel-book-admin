import Sidebar from "../../components/sidebar/Sidebar";
import "./add.scss";
import { DateRange } from 'react-date-range'; 
import {useState} from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import axios from "axios";



const Add = () => {

  const[info,setInfo]=useState({})
  const [date, setDate] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
      }
    ]);

    const[price,setPrice]=useState(0)

    const parseDate=(date)=>{

      let startDate=date[0].startDate+' '
      let endDate=date[0].endDate+' '
      let start=startDate.split(' ').slice(1,4).join(' ')
      let end=endDate.split(' ').slice(1,4).join(' ')
       return [start,end]
      };

  const handlechanges =(e)=>{
     setInfo(prev=>({...prev,[e.target.id]:e.target.value}))
  };
  const handleDateChange =(date)=>{
    setPrice((((date.endDate-date.startDate)/(1000*60*60))+24)*100)
 };   



  const handleClick= async(e)=>{
    e.preventDefault()
    const noOfhrs=((date[0].endDate-date[0].startDate)/(1000*60*60))+24
    const days=parseDate(date)
    const newUser={...info,"startDate":`${days[0]}`,"endDate":`${days[1]}`,"room":"404","amount":`${noOfhrs*100}`}
    
    try{
    await axios.post("/user",newUser)
    }
    catch(err){
      alert("Please Fill All the Fields")
    }
  };


  return (
    <div className="add">
      <Sidebar/>
      <div className="addContainer">
        <div className="top">
         <h1>Add New Booking</h1>
        </div>    
        <div className="bottom">
        

          <form >
            <div className="details">
            <div className="formInput">
              <label>Full Name</label>
              <input id="fullName" onChange={handlechanges} type="text" placeholder="Your Name" />
            </div>
            
            <div className="formInput" onChange={handlechanges}>
              <label>Email</label>
              <input id="email" onChange={handlechanges} type="email" placeholder="your-mail@gmail.com" />
            </div>
            
            <div className="formInput">
              <label>Room Number</label>
              <input  type="text" placeholder="Selected Room" disabled/>
              <select className="roomList">
                <option>D404</option>
              </select>
            </div>

            <div className="formInput" >
              <label>Price</label>
              <input id="amount"  type="text" placeholder={price} disabled/>
            </div>
            </div>
            <div className="formInput">
              <label>Duration</label>
              <div className="date">
              <DateRange   
            editableDateInputs={true}
            onChange={item => {
               setDate([item.selection])
               handleDateChange(item.selection)
            }}
            moveRangeOnFirstSelection={false}
            ranges={date}
            rangeColors={['#3E54AC','#3E54AC','#3E54AC']}
              />
              </div>
            </div>
          </form>
          <button onClick={handleClick} className="submit">Finish Booking</button>
        </div>
        
      </div>
    </div>
  )
}


export default Add