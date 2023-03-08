import axios from "axios";
import React, { Component } from "react";
import "./register.css";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname:'',
      lastname:'',
      age: '',
      bloodgroup:'',
      contactnumber:'',
      emailid:'',
      password: '',
      confirmpassword:''
    };
  }

  handlefirstnameChange = (event) => {
    this.setState({ firstname: event.target.value });
  };

  handlelastnameChange = (event) => {
    this.setState({ lastname: event.target.value });
  };
  handleageChange = (event)=>{
    this.setState({age : event.target.value});
  };
  handlebloodgroupChange = (event)=>{
    this.setState({bloodgroup : event.target.value});
  };
  handlecontactnumberChange = (event)=>{
    this.setState({contactnumber : event.target.value});
  };
  handlemailidChange = (event) => {
    this.setState({ emailid: event.target.value });
  };
  handlepasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };
  handleconfirmpasswordChange = (event) => {
    this.setState({ confirmpassword: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      age: this.state.age,
      bloodgroup: this.state.bloodgroup,
      contactnumber:this.state.contactnumber,
      emailid: this.state.emailid,
      password: this.state.password,
      confirmpassword: this.state.confirmpassword
    };
    axios.post('http://127.0.0.1:8080/post', data)
  };
    render(){
      return(
        <div className="heading" >
          Register Yourself and Make a Difference !
      <div className="actual">    
          <form onSubmit={this.handleSubmit}>    
            <label>First Name</label><br/>
            <input type="text" name="fname" id="fname" placeholder="First Name" value={this.state.firstname} onChange={this.handlefirstnameChange} /><br/>    
            <label>Last Name</label><br/>
            <input type="text" id="lname" placeholder="Last Name" value={this.state.lastname} onChange={this.handlelastnameChange} /> <br/>
            <label >Age</label><br/>
            <input type="text" id="age" placeholder="Age" name="age" value={this.state.age} onChange={this.handleageChange}/><br/>
            <label>Blood Group</label><br/>
            <input type="text" id="bloodgroup" placeholder="Blood Group" value={this.state.bloodgroup} onChange={this.handlebloodgroupChange} /> <br/>
            <label>Contact Number</label><br/>
            <input type="text" id="contactnumber" placeholder="Contact Number" value={this.state.contactnumber} onChange={this.handlecontactnumberChange} /> <br/>
            <label>Email</label><br/>
            <input type="email" id="email" placeholder="Email Id" value={this.state.emailid} onChange={this.handlemailidChange} /> <br/>
            <label>Password</label><br/>
            <input type="password" id="password" placeholder="Password" value={this.state.password} onChange={this.handlepasswordChange} /><br/>
            <label>Confirm Password</label><br/>
            <input type="password" id="confirmpassword" placeholder="Confirm Password" value={this.state.confirmpassword} onChange={this.handleconfirmpasswordChange} /><br/>
            <button className="button" type="submit">Submit</button><br/>
          </form>
        </div>
        </div>
        
  );
            }
          }
export default Register;