
/*import Point from './module1'
import {Point3D} from './module1'
console.log("Forst react js file");
//Instance of point 
let c1 = new Point(1, 10);
c1.display();

let c2 = new Point3D(1,2,3);
c2.display();*/

import React from 'react'
import ReactDom from 'react-dom'
//define an element
//let e =  React.createElement("u", null , "My first react application");
//accuire the cotainer
let r =  document.getElementById('root');

//ReactDom.render(e,r);

//JSX for render
/*ReactDom.render(
<div>
 <h3>welcome to react</h3> 
 <u>wells fargo</u>
 {12+40}
 {"wells fargo"}
</div>, r);*/

//Define functional component

let MyTag = () => {
    return <h1> My first functional component</h1>
}
ReactDom.render(<MyTag/>,r);
