import React from "react";
import SignupForm from './SignupForm'

const Signup = () => {
  return (
    <div className="container">
      <div className="center-rec">
        <div className="auth-page">
          <h1>Expense Tracker</h1>

          <div className="auth-container">
            <div className="quotes">
              <p>
                “Don't tell me what you value, show me your budget, and I'll
                tell you what you value.”
              </p>
            </div>

            <div className="auth-btn">
              <div>
                
                <SignupForm />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
