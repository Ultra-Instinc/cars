import 'bulma/css/bulma.css'
import './styles.css'
import React from 'react';  //1
import {createRoot} from 'react-dom/client' //2
import { Provider } from 'react-redux';
import { store } from './store';
import App from './app'


const el = document.getElementById('root') //3
const root = createRoot(el) //4

root.render(       //5
    <Provider store={store}>
        <App/>
    </Provider>
)