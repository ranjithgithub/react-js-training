import React from "react"
import SingIn from "./login/SignIn"
import SingUp from "./login/SignUp"
import {Route, Link, Switch} from "react-router-dom"
import {NotFound} from "./routeComponents"
import {HomeComponent} from "./HomeComponent"
import ManageProducts from "./shopping/ManageProducts"
//class based componet
/*class App extends React.Component{
     render() {
         return <div>
             <h1 className="well">Wells fargo</h1>
             <h3>White feild</h3>
            </div>
     }
 }*/

 /*class App extends React.Component{
   //override default render method for any React component
    render() {
        return <div>
            <nav className="navbar navbar-inverse">
             <a href="" className="navbar-brand">My react app</a>
            </nav>
            <SingIn/>
            <hr/>
            <SingUp/>
           </div>
    }
}*/
//Working with routers
class App extends React.Component{
    //override default render method for any React component
     render() {
         return <div>
             <nav className="navbar navbar-inverse">
              <Link to="/" className="navbar-brand">My react app</Link>
              <ul className ="nav navbar-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/signin">Sign in</Link></li>
                <li><Link to="/signup">Sign up</Link></li>
                <li><Link to="/manage">Manage products</Link></li>
               </ul>
             </nav>
             <Switch>
                <Route path="/" exact component={HomeComponent}/>
                <Route path="/signin"  component={SingIn}/>
                <Route path="/signup"  component={SingUp}/>
                <Route path="/manage"  component={ManageProducts}/>
                <Route path="*"  component={NotFound}/>
             </Switch>
            </div>
        }
 }
 export default App