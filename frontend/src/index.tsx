import "./APP"

import ReactDOM from 'react-dom/client'
import React from "react"
import App from "./APP"

import "./app.css"


import { BrowserRouter } from 'react-router-dom'



let doc: HTMLElement = document.getElementById("root") as HTMLElement

// let b :HTMLElement = document.getElementById("ss") as HTMLElement
// const myIcron = new Image();
// myIcron.src = Icron
// b.appendChild(myIcron)


const root = ReactDOM.createRoot(
    doc
)


root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)

