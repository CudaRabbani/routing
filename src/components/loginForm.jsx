import React, {Component} from 'react';

class LoginForm extends Component {

    state={
        account: {username: '', password: ''}
    };

    username = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        const username = this.username.current.value;
        console.log(username);
    };

    handleChange = e => {
        const account = {...this.state.account};
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({account});
    };
    render() {
        const {account} = this.state;
        return (
            <div className="containter">
                <h3>Login</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text"
                               className="form-control"
                               id="username"
                               name="username"
                               value={account.username}
                               onChange={this.handleChange}
                               placeholder="Enter user name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password"
                               className="form-control"
                               id="password"
                               name="password"
                               value={account.password}
                               onChange={this.handleChange}
                               placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}


export default LoginForm;
