import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, TextField } from "@material-ui/core";

const SignupForm = () => {

    const history = useHistory()

    const handleCancel = () => {
        history.push('/')
    }

    return (
        <div className="form-container">

                <form>
                  <table cellSpacing="25">
                    <th>
                      <tr>
                        <td>
                          <label>Name</label>
                        </td>
                        <td>
                          <TextField placeholder="Name" size="small" />
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
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <Button variant="contained" color="secondary" onClick={handleCancel}>Cancel</Button>
                        </td>
                        <td>
                          <Button variant="contained" color="primary">Submit</Button>
                        </td>
                      </tr>
                    </th>
                  </table>
                </form>

        </div>
    );
}

export default SignupForm