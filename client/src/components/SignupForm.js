import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, TextField } from "@material-ui/core";
import AppService from '../services/AppService'

const SignupForm = () => {

    const history = useHistory()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async () => {
      const data = {
        name, email, phone, password
      }
      
      const response = await AppService.signup(data)

      if (response.status === 200) {
        history.push('/')
      }

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
                          <label>Name</label>
                        </td>
                        <td>
                          <TextField placeholder="Name" size="small" value={name} onChange={e => setName(e.target.value)} />
                        </td>
                      </tr>

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
                          <label>Phone</label>
                        </td>
                        <td>
                          <TextField
                            placeholder="Phone"
                            type="number"
                            size="small"
                            value={phone} onChange={e => setPhone(e.target.value)}
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
                          <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
                        </td>
                      </tr>
                    </thead>
                  </table>
                </form>

        </div>
    );
}

export default SignupForm