import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";
import { Component } from "react";
import UserContext from "../utils/userContext";

class About extends Component{
 

  constructor(props){
    super(props);
    console.log("Parent Constructor call");
    
  }


  componentDidMount(){
    // best place to make API call
    console.log("Parent component did mount call");
    
  }

  render(){

    console.log("Parent render function call");
    return (
      <div>
        <h1>About Us</h1>
        
    <UserContext.Consumer>
      {({user})=> <h4 className="font-bold text-xl">{user.name}-{user.email}</h4>
      //takes in a JSX which is a function that takes a value
    } 
    </UserContext.Consumer>
        <p>This is Namaste React Live Course-Finding the Path-Chapter 7 </p>
        {/* <Profile name={"First child"} xya="abc"/> */
        <ProfileFunctionalComponent/>}
      </div>
    );

  }

}
export default About;

/*
Parent constructor
parent render
first child constructor
first child render
second child constructor
second child render
First child componentDidMOunt
Second child componentDidMOunt
Parent Child componentDidMOunt

*/ 
