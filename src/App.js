import React from 'react';
import './App.css';

import CreateAccount from './screens/CreateAccount/CreateAccount'
import LoginScreen from './screens/Login/LoginScreen'
import ResetPasswordEmail from './screens/Login/ResetPasswordEmail'
import ResetPassword from './screens/Login/ResetPassword';
import CreateSucess from './screens/CreateAccount/CreateSucess'



function App() {
  return (
    <div className="App">
      <CreateSucess/>
    </div>
  );
}

export default App;
