import React, { useState} from "react";
import axios from "axios";
import './update.css';

function UpdatePage() {
  const [todo, setTodo] = useState({
    firstname:'',
      lastname:'',
        age:'',
        bloodgroup:'',
      emailid: '',
      password: '',
  });

  const handleChange = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:8080/put`, todo).then((res) => {
      console.log(res.data);
      setTodo({ contactnumber: "", firstname: "", lastname: "",age:"",bloodgroup:"", emailid: "",password: ""});
    });
  };

  return (
  
    <div className="jojo">
        Update !<br/>
      <form onSubmit={handleSubmit}>
      <label>Contact Number </label><br/>
          <input type="number" name="contactnumber" value={todo.contactnumber} onChange={handleChange} /><br/>
        <label>First Name </label><br/>
          <input type="text" name="firstname" value={todo.firstname} onChange={handleChange} />
        <br/>
        <label>Last Name </label><br/>
          <input type="text" name="lastname" value={todo.lastname} onChange={handleChange} />
        <br/>
        <label>Age</label><br/>
          <input type="text" name="age" value={todo.age} onChange={handleChange} />
        <br/>
        <label>Blood Group</label><br/>
          <input type="text" name="bloodgroup" value={todo.bloodgroup} onChange={handleChange} />
        <br/>
        <label>Email </label><br/>
          <input type="text" name="emailid" value={todo.emailid} onChange={handleChange} />
        <br/>
        <label>Password</label><br/>
          <input type="text" name="password" value={todo.password} onChange={handleChange} />
        <br/>
        <button type="submit">Update</button>
      </form>
   
    </div>
 
  );
}
export default UpdatePage;