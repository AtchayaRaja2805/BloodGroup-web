import axios from "axios";
import "./main.css";
import React, { useState,useEffect } from "react";
function Main(){
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:8080/get')
          .then(response => {
              setQuotes(response.data);
          })
          .catch(error => {
              console.log(error);
          });
  }, []);
  
    return (
      <div className="body">
      <div className="navbar">
        
      </div>
      <div>
        <p>
          Bloodgroup Database !!
        </p>
      </div>
      <div className="table">
        <table border={1}>
          <thead>
            <tr>
              <th>firstname</th>
              <th>lastname</th>
              <th>age</th>
              <th>blood group</th>
              <th>contact number</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
             {quotes.map(quote =>(
              <tr key={quote.contactnumber}>
              <td>{quote.firstname}</td>
              <td>{quote.lastname}</td>
              <td>{quote.age}</td>
              <td>{quote.bloodgroup}</td>
              <td>{quote.contactnumber}</td>
              <td>{quote.emailid}</td>
              </tr>

             )
          
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Main;