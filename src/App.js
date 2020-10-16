import React from 'react';
import './App.css';
import MyRoute from './Components/MyRoute/MyRoute';
import { useState } from 'react';
import { createContext } from 'react';
export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  const [addService, setAddService] = useState({})
  return (
    <UserContext.Provider value={ {loggedIn:[loggedInUser, setLoggedInUser],services:[addService, setAddService]} }>
      <MyRoute></MyRoute>
    </UserContext.Provider>
  );
}

export default App;
