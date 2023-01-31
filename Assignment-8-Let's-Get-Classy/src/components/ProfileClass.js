import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    //constructor is the best place to create state variables like below
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
    console.log("Child constructor function" + this.props.name);
  }

  // async componentDidMount() {
  //   //best place to do API call

  //   const data = await fetch("https://api.github.com/users/srushtid7");
  //   const json = await data.json();
  //   console.log(json);
  //   this.setState({
  //     userInfo:json
  //   })
  //   console.log("Child Component DidMount" + this.props.name);
  // }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Namaste React OP");
    }, 1000);
   console.log("Child Component DidMount");
  }

  componentDidUpdate() {
   console.log("Child Component Update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Component will Unmount");
  }
  render() {
    console.log("Child render function" + this.props.name);
    return (
      <div>
        <h1>Profile component using Class Component way</h1>
        <h2>Name: {this.state?.userInfo?.name}</h2>
        <h2> Location : {this.state?.userInfo?.location}</h2>
        <img src={this.state?.userInfo?.avatar_url} />
      </div>
    );
  }
}
export default Profile;
