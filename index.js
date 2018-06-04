import React from "react"
import ReactDom from "react-dom"
import App from "./components/App"
import {BrowserRouter} from "react-router-dom"
import {createStore} from "redux"
import {Provider} from "react-redux"
import appReducers from "./reducers"
import "../node_modules/bootstrap/dist/css/bootstrap.css"

let appStore =  createStore(appReducers);
//Class based component,
// integrating Redux with react using Provider.
ReactDom.render(
  <Provider store={appStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));