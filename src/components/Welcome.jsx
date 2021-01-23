import { Component } from "react";
import './Welcome.css';
import './home.js';

class Welcome extends Component
{
    gotohome = () => {
        this.props.history.push('/');
    }

    render()
    {
        return(
            <div className="enjoy">
                <h1>Enjoyyyyyyyyyyyyy !!!</h1>
                <button onClick={this.gotohome}>Home</button>
            </div>
        );
    }
}

export default Welcome;