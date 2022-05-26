// import React from 'react';
// import Child from './Child'
// class Parent extends React.Component{
      
//        state = {
//         name: "",
//        }
  
//     handleCallback = (childData) =>{
//         this.setState({name: childData})
//     }
  
//     render(){
//         const {name} = this.state;
//         return(
//             <div>
//                 <Child parentCallback = {this.handleCallback}/>
//                 {name}
//             </div>
//         )
//     }
// }
// export default Parent;


import React from 'react'
import Child from './Child';
import {Button} from 'reactstrap';
import { useState } from 'react';

export default function Parent() {
  const [data, setData] = useState('sucheta');
  
  const parentToChild = () => {
    setData("saha.");
  }
  return (
    <div className="App">
    <Child parentToChild={data}/>
      
      <div>
        <Button primary onClick={() => parentToChild()}>Click Parent</Button>
      </div>
    </div>
  )
}


