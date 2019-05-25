import React, { Component } from "react";

import "./Navbar.css";
import Logo from "../Logo/Logo";
import Menu from "../menu/menu.js";

class Navbar extends Component {
    state = {
        logoText: "Linda Ikeji's Blog"

    }
    
    render() {
        return (
            <div className="navbar">
                <Logo text={this.state.logoText} />
                <Menu text= {this.state.menu} />
            </div>
        )
    }

    
}

export default Navbar;