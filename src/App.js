import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import AddEditUser from './pages/AddEditUser';
import UserInfo from './pages/UserInfo';
import About from './pages/About';
import Header from './component/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addUser' element={<AddEditUser/>}/>
        <Route path='/editUser/:id' element={<AddEditUser/>}/>
        <Route path='/userinfo' element={<UserInfo/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
