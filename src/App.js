import React from 'react';
import './App.css';
import Home from './screens/MatchRelevance/MatchRelevance';
import CreateAccount from './screens/CreateAccount/CreateAccount';
import LoginScreen from './screens/Login/LoginScreen';
import ResetPasswordEmail from './screens/Login/ResetPasswordEmail';
import ResetPassword from './screens/Login/ResetPassword';
import CreateSucess from './screens/CreateAccount/CreateSucess';
import ConfirmEmail from './screens/CreateAccount/ConfirmEmail';
import NewLogin from './screens/Login/NewLogin';


function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <ConfirmEmail/>
    </div>
  );
}

export default App;
