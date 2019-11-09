import React, { Component } from 'react';
import "./navbar.css";

export default class Navbar extends Component {
    render() {
        return (
            <div className="rk-navbar">
                <div className="rk-navbar__group">
                    <div className="rk-logo mrg1">
                        ResearchKernel
                    </div>
                    <div className="rk-links">
                        <a className="rk-links__item mrg1" href="/community">Community</a>
                        <a className="rk-links__item mrg1" href="/about-us">About Us</a>
                        <a className="rk-links__item mrg1" href="https://blog.researchkernel.org" target="_blank">Blog</a>
                        <a className="rk-links__item mrg1" href="/donate-us">Donate Us</a>
                    </div>
                </div>
                <div className="rk-navbar__group rk-lr mrg1">
                    Login/Register
                </div>
            </div>
        )
    }
}