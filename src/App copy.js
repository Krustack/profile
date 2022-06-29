import './App.css';
import Hobbies from './components/Hobbies';
import Image from './components/Image';
import Profile from './components/Profile';
//import {useState} from 'react'
function App() {
 // const [toggle, setToggle] = useState(false)
 var toggle = false
  const statToggle = toggle ? 'แสดง':'ซ่อน'
  return (
  <>
  <Image/>
  <Profile/>
  {/* <button onClick={()=>{setToggle(!toggle)}}>{statToggle} : งานอดิเรก </button> */}
  <button onClick={()=>{toggle = !toggle; console.log(toggle)}}>{statToggle} : งานอดิเรก </button>
  {toggle &&
  <Hobbies/>
}
  </>
  );
}

export default App;
