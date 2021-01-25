import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '../styles/app.scss'
import MainComponent from './MainComponent'
import Signup from './SignupComponent'

const App = () => {
  return (
    <div>

      <BrowserRouter>

          <Switch>

            <Route path="/" component={MainComponent} exact />
            <Route path="/signup" component={Signup} />

          </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App