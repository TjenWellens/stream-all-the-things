import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import importComponent from 'react-imported-component';
import Home from './pages/Home.jsx'
import LoadingComponent from './pages/Loading'
import ErrorComponent from './pages/Error'
const About = importComponent(() => import("./pages/About"), {
    LoadingComponent,
    ErrorComponent
});
const App = () => (
    <React.Fragment>
        <GlobalStyles />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" render={() => <About />} />
            <Redirect to="/" />
        </Switch>
    </React.Fragment>
)
export default App