import React, { useState } from 'react';
import axios from 'axios';
import './del.css';

const Delete = () => {
  const [contactnumber, setContactnumber] = useState('');
   

  const handleDelete = () => {
    axios.delete(`http://localhost:8080/del?contactnumber=${contactnumber}`)
      .then(response => {
        alert('Details is deleted successfully!');
        setContactnumber('');
         
      })
      .catch(error => {
        alert('Failed to delete the details.');
        console.error(error);
      });
  };

  return (
    <div className="dodo">
      <h1>Delete</h1>
      <form>
        <div id="a">
          <label htmlFor="id">Contact Number</label><br/>
          <input type="text" id="contactnumber" value={contactnumber} onChange={event => setContactnumber(event.target.value)}
          />
        </div>
          
       <button type="button" onClick={handleDelete}>Delete</button>
      </form>
    </div>
  );
};

export default Delete;