import logo from '../logo.svg';
import './home.css';
import React, { Component } from 'react';
import './Welcome';


class Home extends Component
{
  url = "https://www.cricbuzz.com/"
  constructor()
  {
    super()
    this.state = {userName:'', nameError:'', list:["ok", "done"]}
  }

  onClick = ($event) => {
    console.log("button is clicked", $event);
    window.open(this.url, "_ blank");
  }

  onNameChange = (Event) => {
    console.log("value is ", Event.target.value);
    this.setState({userName: Event.target.value})
    const nameRegex = RegExp('^[A-Z][a-zA-Z\\s]{2,}$');
    if(nameRegex.test(Event.target.value)) this.setState({nameError: ''})
    else this.setState({nameError: 'Invalid Name'})
  }

  cricbuzz = () => {
    this.props.history.push('/Welcome');
  }

  render()
  {
    return(
      <>
        <div class ="heading">
          <h1> Hellooo {this.state.userName}, Welcome to New World</h1>
          <img src={logo} alt='logo' onClick={this.onClick}/>
        </div>
        <div>
          <input onChange={this.onNameChange} />
          <span className="error-output">{this.state.nameError}</span>
          <button onClick={this.cricbuzz}>Enjoy</button>
        </div>
        <div>
          <p>At BridgeLabz, we are a techie community of</p>
          {this.state.list.map(item => (
            <li>{item}</li>
          ))}
          {/* <ul> 
              <li>technologists</li>
              <li>thinkers</li>
              <li>builders</li>
          </ul> */}
          <p>Working together to keep the tech Employability of engineers alive,
              so tech companies worldwide can get contributors and creator for technology solutions.
          </p>

          <p>To know about us, visit<a href="https://www.bridgelabz.com/">BridgeLabz</a>
            to learn even more about our mission i.e. <strong>Employability to all</strong>.</p>
        </div>
      </>
    )
  }
}

export default Home;
