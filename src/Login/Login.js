import React from 'react';
import '../App.css';
import { Redirect } from "react-router-dom";



class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e) => {
        console.log("keri");
        e.preventDefault();
        this.props.history.push('/login');
    
    }  


    render() {
        return(
            <div className="App" >
                <form className="form"  get="post">
                <h1>E-Commerce Login</h1>
                   <input className="form input todo" type = 'email' name='email' placeholder='Email' required onChange = {this.handleChange} />
                    <input className="form input todo" type = 'password' name='password' placeholder='Password' required onChange = {this.handleChange} />
                    <button className="form input todo"  onClick={this.handleSubmit}>Login</button>
                    </form>
            </div>
        )
    }
}

export default Login;