import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import App from './components/App.jsx'

let mount = document.createElement('div')

document.querySelector('body').appendChild(mount)

ReactDOM.render(<App/>, mount)
