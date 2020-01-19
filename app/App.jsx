import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home'
const App = () => (
    <React.Fragment>
        <GlobalStyles />
        <Switch>
            <Route exact path="/" component={Home} />
            <Redirect to="/" />
        </Switch>
    </React.Fragment>
)
export default App