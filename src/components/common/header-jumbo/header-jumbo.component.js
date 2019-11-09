import React, { Component } from 'react';
import SearchBar from "../search_bar/search-bar.component";
import "./header-jumbo.css";

export default class HeaderJumbo extends Component {
    render() {
        return (
            <div className="headerJumbo">
                <SearchBar />
            </div>
        )
    }
}