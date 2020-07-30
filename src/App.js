import React, { useState, useEffect} from 'react';
import './App.css';

const App = () =>{
  const [user, seTUser] = useState(null);

  //return the users from the api
  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
        .then(data => console.log(data))
  }

  //call the api in componentDidMount
  useEffect(fetchUsers, []);

 
  return (
    <div className="App">
      Test
    </div>
  );
}

export default App;
