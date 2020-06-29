import React from 'react';
import './App.css';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { IconContext } from 'react-icons'
import {FaAngellist, FaReact} from 'react-icons/fa'
import { MdAlarm } from 'react-icons/md'

const CustomToast = ({closeToast}) =>{
  return (
    <div>
      Something went wrong!
      <button onClick = {closeToast}>CLose</button>
    </div>
  )
}

toast.configure()
function App() {
  const notify = () =>{
    toast('basic notification',{position : toast.POSITION.TOP_LEFT})
    toast.success('Success notification',{ 
      position : toast.POSITION.TOP_CENTER ,
      autoClose: 8000
    })
    toast.info(' info notification',{
      position : toast.POSITION.TOP_RIGHT ,
      autoClose: false
    })
    toast.warn(<CustomToast />,{position : toast.POSITION.BOTTOM_LEFT})
    toast.error('error notification',{position : toast.POSITION.BOTTOM_CENTER})
    toast('basic notification',{position : toast.POSITION.BOTTOM_RIGHT})
  }

  return (
    <IconContext.Provider value = {{color : 'blue' , size : '5rem'}}>
    <div className="App">
        <FaReact />
        <MdAlarm color = 'purple' size = '10rem'/>
        <button onClick = {notify}>Notify</button>
    </div>
    </IconContext.Provider>
  );
}

export default App;
