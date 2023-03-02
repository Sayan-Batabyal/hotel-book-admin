import Home from "./pages/home/home";
import Users from "./pages/users/users";
import Add from "./pages/add/add";
import Single from "./pages/single/single";


import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Rooms from "./pages/rooms/Rooms";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
         <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="users">
            <Route index element={<Users/>}/>
            <Route path="add" element={<Add/>}/>
            <Route path=":userId" element={<Single/>}/>
          </Route>

          <Route path="rooms">
            <Route index element={<Rooms/>}/>
            <Route path="add" element={<Add/>}/>
            <Route path=":roomId" element={<Single/>}/>
          </Route>

         </Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
