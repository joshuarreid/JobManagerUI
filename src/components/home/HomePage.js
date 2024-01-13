import React, {Component} from 'react';
import {Link} from "react-router-dom";

class HomePage extends Component {
    render() {
        return (
            <div>
                Home Page!
                <Link className="btn btn-primary" to="/test">
                    Test
                </Link>
            </div>
        );
    }
}

export default HomePage;