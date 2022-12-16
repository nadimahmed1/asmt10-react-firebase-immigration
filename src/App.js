
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Header/Header';
import './Pages/Header/Header.css'
import Home1 from './Pages/Main/Home1/Home1';
import Login from './Pages/Main/Login/Login';
import Register from './Pages/Main/Register/Register';
import Services from './Pages/Main/Services/Services';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Footer from './Pages/Share/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home1></Home1>}></Route>
        <Route path='/home' element={<Home1></Home1>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/services' element={
          <RequireAuth>
            <Services></Services>
          </RequireAuth>
        }></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
