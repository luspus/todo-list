import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './containers/App'
import './styles/index.less'

const target = document.querySelector('#root')

render(
    <Provider store={store()}>
        <App />
    </Provider>,
    target
)