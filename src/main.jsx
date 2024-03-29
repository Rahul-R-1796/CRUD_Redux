import React from "react"
import { ReactDOM } from "react"
import App from './App'
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import UserReducer from "./UserReducer"

const store=configureStore({
    reducer:{
        users:UserReducer
    }
})

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
        <App/>
        </Provider>
    </React.StrictMode>
)