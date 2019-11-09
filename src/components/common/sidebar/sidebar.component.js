import React, { Component } from 'react';
import "./sidebar.css";

export default class Sidebar extends Component {
    render() {
        return (
            <div className="flex mb6">
                <div className="flex mb6" data-cy="sort">
                    <h3 className="">Sort by</h3>
                    <div className="flex">
                        <a href="#" className="flex-i pa2 pl0 blue">Most popular</a>
                        <a href="#" className="flex-i blue">Recently viewed</a>
                        <a href="#" className="flex-i pl0 midgrey">A – Z</a>
                    </div>
                </div>
                <div className="flex mb6 mt10" data-cy="sort">
                    <h3 className="">Filter by</h3>
                    <div className="flex">
                        <a href="#" className="flex-i midgrey">2019</a>
                        <a href="#" className="flex-i midgrey">2018</a>
                    </div>
                </div>
            </div>
        );
    }
}