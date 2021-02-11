import React, { Component } from 'react'
import Login from './Login'
import './Signin.css';
import Signin from './Signin';
export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mess: "We are glad to see you again!",
            btn: "I'm New",
            index:0
        }
    }
    clickhandle() {
        if (this.state.index ==1) {
            this.setState({
                mess: "We are glad to see you again!",
                btn: "I'am New",
                index:0

            });
        }
        else {
            this.setState({
                mess: "Looks like you're new here!",
                btn: "Let Me Sign in",
                index:1

            });
        }

    }

    render() {
        let nm;
        if (this.state.index==0) {
            nm = <Login/>;
           
        }
        else {
            
            nm = <Signin/>;
        }
        return (
            <div>

                <div className="container" id="container">
                    <div className="main-container">
                        <div className="first-container">
                            <div className="title-text">
                                <p>{this.state.mess}</p>
                                <h2>Join the Next Generation</h2>
                                <h2>Demand & Supply Platform</h2>
                            </div>

                        </div>
                        <div className="second-container">
                            <a className="btn" onClick={() => this.clickhandle()}>{this.state.btn}</a>
                            {nm}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

