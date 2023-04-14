
// import ToDoList from '../Components/useState_todoList/useStateToDoList.jsx'
import Content from './Components/UseEffect/Content.jsx'
import { useState } from 'react';
import Resize from './Components/UseEffect/Resize.jsx'
import DemNguoc from './Components/UseEffect/DemNguoc.jsx'
import PreViewAvatar from './Components/UseEffect/PreviewAvatar.jsx'
import TestUseRef from './Components/UseRef/index.jsx'
import Testmemo from './Components/memo/index.jsx'
import TestUseCallback from './Components/UseCallback/index.jsx'
import TestUseMemo from './Components/UseMemo/index.jsx'

export default function App() {
  const [show,setShow] = useState(false);
  

  return (

    <div className="App">
      
            {/* <ToDoList/> */}
            {/* <button onClick={() => setShow(!show)}> Show</button> */}
            <TestUseMemo/>
      {/* // neu ma show thi moi hien */}
      {/* {show && <Content/>} 
       */}
       {/* {show && <Resize/>} */}
        {/* {show && <DemNguoc/>} */}
        {/* {show && <PreViewAvatar/>} */}
        {/* {show && <TestUseRef/>}
         */}
        {/* {show && <Testmemo/>} */}
        {/* {show && <TestUseCallback/>} */}
    </div>
  );
}
