import  UserList from './Component/UserList'
import './App.css';
import NavUser from './Component/NavUser';
import UserCard from './Component/UserCard'
import {Routes, Route} from 'react-router-dom'
import Home from './Component/Home'
import Description from './Component/Description';
function App() {
  return (
    <div className="App">
          <NavUser/>
         

         <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/users' element={<UserList/>}/>
           <Route path='/users/:id' element={<Description/>}/>
         </Routes>
  
    </div>
  );
}

export default App;
