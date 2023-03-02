import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Img from '../../img/img.jpg';
import { Link } from 'react-router-dom';
import "./home.scss"
const home = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="mainpage">
          <Link to="/users/add">
          <img src={Img} alt="Hello" />
          </Link>    
        </div>
    </div>
  )
}

export default home