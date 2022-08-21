import React, { memo, ReactElement } from 'react'

import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from "bootstrap"

import Icron from "../asset/images/icon.png"
import Brand from "../asset/images/site_name.png"



const Test = memo(() => {
    const f = () => {
        console.log("hello,world")
        var navbarDropdown = document.getElementById("dropdown")
        console.log(navbarDropdown)
        let drop = new Dropdown(navbarDropdown as HTMLElement)
        drop.toggle()
    }

    const getIconUrl = (): string => {
        let url = new URL(Icron)
        return url.toString()
    }

    const getBrandUrl = (): string => {
        let url = new URL(Brand)
        return url.toString()
    }

    const renderBrand = (): ReactElement => {
        return <div>
            <span className="nav-item">
                <img src={getIconUrl()} />
            </span>
            <span className="nav-item">
                <img src={getBrandUrl()} />
            </span>
        </div>
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <ul className="navbar-brand me-auto mb-1 mb-lg-0">
                    <a href='#'>
                        {renderBrand()}
                    </a>
                </ul>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown" id="dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                    <ul className='d-flex'>
                        <button className="btn btn-outline-success" type="submit" onClick={f}>Search</button>
                    </ul>
                </div>
            </div>
        </nav>
    )
})

export default Test