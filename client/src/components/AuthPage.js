import React from "react";
import "../styles/app.scss";
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const AuthPage = () => {

    const history = useHistory()

    const handleSignup = () => {
        history.push('/signup')
    }

    const handleSignin = () => {
      history.push('/signin')
    }

  return (
    <div className="auth-page">
      <h1>Expense Tracker</h1>

      <div className="auth-container">
        <div className="quotes">
          <p>
            “Don't tell me what you value, show me your budget, and I'll tell
            you what you value.”
          </p>
        </div>

        <div className="auth-btn">
          <div>
            <Button
                className="btn1"
                variant="contained"
                onClick={handleSignup}
            >
                Signup
            </Button>

            <Button 
              className="btn2" 
              variant="contained"
              onClick={handleSignin}
            >
                Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
