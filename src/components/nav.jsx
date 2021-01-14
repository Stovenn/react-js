import React from 'react'
import SearchBar from './searchbar'

export default function nav(props) {

    return (
        <nav className="navbar navbar-dark bg-danger">
            <p className="navbar-brand">Super</p>
            <SearchBar 
                val = {props.filter}
                checked = {props.check}
                changed={props.change}/>
        </nav>
    )
}
