import React from 'react'
import '../styles/app.scss'
import { Button } from '@material-ui/core'

const AuthPage = () => {
  return (
    <div className="auth-page">

        <h1>Expense Tracker</h1>

        <div className="auth-container">

                <div className="quotes">
                    <p>
                        “Don't tell me what you value, show me your budget, and I'll tell you what you value.”
                    </p>
                </div>

                <div className="auth-btn">
                    
                    <div>
                        <Button className="btn1" variant="contained">Signup</Button>

                        <Button className="btn2" variant="contained">Login</Button>
                    </div>

                </div>

        </div>

    </div>
  );
}

export default AuthPage