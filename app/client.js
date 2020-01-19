import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {HelmetProvider} from 'react-helmet-async';

const element = document.getElementById('app')
const app = (
    <HelmetProvider>
        <App/>
    </HelmetProvider>
)
ReactDOM.render(app, element)
//Enable Hot Module Reloading
if (module.hot) {
    module.hot.appect();
}