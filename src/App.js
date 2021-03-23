import "./App.css";
import Profil from "./Profil/Profil";

import React, { Component } from "react";

class App extends Component {
    state = {
        show: false,
    };
    handleShow = () => {
        this.setState({ show: !this.state.show });
    };
    render() {
        return (
            <div>
                <button onClick={this.handleShow}>Show Profile</button>
                {this.state.show ? <Profil /> : <h1>Click to show profile</h1>}
            </div>
        );
    }
}

export default App;
