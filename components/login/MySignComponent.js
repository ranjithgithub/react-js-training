import React, {Component} from "react"

export default class Mysign extends Component {
   /* constructor(){
        super();
        //trying to access parent props in child constructor will not work
        // pass props to super from constructor to get it in constructor.
        //console.log('constructor..', this.props.heading);
    }*/
    render() {
        //this.props.heading = "Alchemy";//this will not work since props are immutable
        console.log('Render ...');
        return <div>
         <h3> {this.props.heading}</h3>
            <form>
              <input type="text" placeholder ="Enter user ID" ref="userid"/>&nbsp;
              <input tyep="password" placeholder ="Enter password" ref="pwd"/>&nbsp;
              <button className="btn btn-primary" type="button" onClick={this.sendData}>{this.props.heading}</button>
            </form>
         </div>
    }

    sendData = () => {
        if(this.props.onSingIn) {
          this.props.onSingIn(this.refs.userid.value);
        }
        
        //console.log("Send data method called...", this.refs.userid.value);       
    }

    componentWillMount() {
        console.log('constructor..', this.props.heading);
        //Dom is not ready so getting any elements wont work
        //document.querySelector("h3").style.color = "red";
        console.log('componentWillMount..');        
    }

    componentDidMount() {
        document.querySelector("h3").style.color = "red";
        console.log('componentDidMount..');  
    }

    componentWillUnmount() {
        console.log('componentWillUnmount..');  
    }
}