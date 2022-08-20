import "./APP"

import ReactDOM from 'react-dom/client'
import React from "react"
import App from "./APP"

import "./app.css"

let doc: HTMLElement = document.getElementById("root") as HTMLElement
const root = ReactDOM.createRoot(
    doc
)

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)


