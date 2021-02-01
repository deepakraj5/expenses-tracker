import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, TextField } from "@material-ui/core";
import AppService from '../services/AppService'

const SigninForm = () => {

    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async () => {
      
      const response = await AppService.signin(email, password)

      console.log(response)

    }

    const handleCancel = () => {
        history.push('/')
    }

    return (
        <div className="form-container">

                <form>
                  <table cellSpacing="25">
                    <thead>

                      <tr>
                        <td>
                          <label>Email ID</label>
                        </td>
                        <td>
                          <TextField
                            placeholder="Email-ID"
                            type="email"
                            size="small"
                            value={email} onChange={e => setEmail(e.target.value)}
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <label>Password</label>
                        </td>
                        <td>
                          <TextField
                            placeholder="Password"
                            type="password"
                            size="small"
                            value={password} onChange={e => setPassword(e.target.value)}
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <Button variant="contained" color="secondary" onClick={handleCancel}>Cancel</Button>
                        </td>
                        <td>
                          <Button variant="contained" color="primary" onClick={handleSubmit}>Login</Button>
                        </td>
                      </tr>
                    </thead>
                  </table>
                </form>

        </div>
    );
}

export default SigninForm