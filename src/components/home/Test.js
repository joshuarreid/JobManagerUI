import React, {Component} from "react";
import {Link} from "react-router-dom";

class TestPage extends Component {
    render() {
        return (
            <div>
                Test Page!
                <Link className="btn btn-primary" to="/home">
                    Home
                </Link>
            </div>
        );
    }
}

export default TestPage;