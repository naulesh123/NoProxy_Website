import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Attendance from './Components/Attendance';
import PDC_classes from './Components/PDC_classes';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Ped_lab from './Components/Ped_lab';
import Tp from './Components/Tp';
import Pi from './Components/Pi'
import Minor from './Components/Minor'
import Faceapi2 from './Components/Faceapi2'
import D_home from './dummy_day/D_home'
import D_ped_lab from './dummy_day/D_ped_lab';
import D_tp from './dummy_day/D_tp';
import D_pi from './dummy_day/D_Pi';

import D_bio from './dummy_day/D_bio'
import D_Faceapi2 from './dummy_day/D_Faceapi2'
import D_mto_lab from './dummy_day/D_mto_lab'
import D_navbar from './dummy_day/D_navbar'
import D_pdc_classes from './dummy_day/D_pdc_classes'


import D_attendance from './dummy_day/D_attendance2'
import D_check from './dummy_day/D_check';
import check from './Components/check'
import MTO_lab from './Components/MTO_lab';
import PDC_lab from './Components/PDC_lab';
import Bio from './Components/Bio';


function App() {
  return (
    //home page should be called here

<div>

<Router>



{/* <PDC_classes></PDC_classes> */}

<Routes>

<Route path='/' element={<Home></Home>}></Route>
<Route path='/Attendance' element={<Attendance></Attendance>}></Route>
<Route path='/PDC_classes' element={<PDC_classes></PDC_classes>}></Route>
<Route path='/About' element={<About></About>}></Route>
<Route path='/Ped_lab' element={<Ped_lab></Ped_lab>}></Route>
<Route path='/Tp' element={<Tp></Tp>}></Route>
<Route path='/Pi' element={<Pi></Pi>}></Route>
<Route path='/Minor' element={<Minor></Minor>}></Route>
<Route path='/Faceapi2' element={<Faceapi2></Faceapi2>}></Route>
<Route path='/D_home' element={<D_home></D_home>}></Route>
<Route path="/D_attendance2" element={<D_attendance></D_attendance>}></Route>
<Route path="/D_bio" element={<D_bio></D_bio>}></Route>
<Route path="/D_Faceapi2" element={<D_Faceapi2></D_Faceapi2>}></Route>
<Route path="/D_mto_lab" element={<D_mto_lab></D_mto_lab>}></Route>
<Route path="/D_navbar" element={<D_navbar></D_navbar>}></Route>
<Route path="/D_pdc_classes" element={<D_pdc_classes></D_pdc_classes>}></Route>
<Route path="/D_ped_lab" element={<D_ped_lab></D_ped_lab>}></Route>
<Route path="/D_pi" element={<D_pi></D_pi>}></Route>
<Route path="/D_tp" element={<D_tp></D_tp>}></Route>
<Route path="/D_check" element={<D_check></D_check>}></Route>
<Route path='/check' element={<D_check></D_check>}></Route>
<Route path='/MTO_lab' element={<MTO_lab></MTO_lab>}></Route>
<Route path='/PDC_lab' element={<PDC_lab></PDC_lab>}></Route>
<Route path='/Bio' element={<Bio></Bio>}></Route>

</Routes>






</Router>

</div>



  );
}

export default App;
