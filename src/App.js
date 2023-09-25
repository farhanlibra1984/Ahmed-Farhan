import "./Appstateobj"
import "./App4";
import "./App.css"
import { useState } from "react";
import App2 from "./App2";
import Appstatobj from "./Appstateobj";
import App3 from "./App3";
import App4 from "./App4";
import Quizapp from "./quizapp";




function App() {
//  let [counter, setCounter] = useState([2,5,6,9]);

//  const increment = (index)=>{
//     let copycounter = [...counter];
//     copycounter[index]++;
//     setCounter(copycounter);


//  };
// const decrement = (index)=>{
//   let copycounter = [...counter];
//     copycounter[index]--;
//     setCounter(copycounter);
//  };
 

  return (

       <div>

        <Quizapp/>
        
{/*      
          // counter.map((x,index) => (
          //   <>
          //   <button onClick={()=>decrement(index)}>-</button>
          //   <span>{x}</span>
          //   <button onClick={()=>increment(index)}>+</button>
          //   <br/>
            
          //   </>
          // ))
            
      
          //  */}
            
              
              
      
    </div>
   
  );
}
export default Quizapp;
  

               
