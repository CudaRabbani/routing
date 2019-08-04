import React, {Component} from 'react';
import Input from "./common/input";

class LoginForm extends Component {

    state={
        account: {username: '', password: ''},
        errors: {}
    };

    validate = () => {
        const {account} = this.state;
        const errors={};

        if (account.username.trim() === '') {
            errors.username="Username is required.";
        }
        if (account.password.trim() === '') {
            errors.password="Password is required.";
        }
        return Object.keys(errors).length === 0 ? null : errors;
    };

    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({errors: errors || {}});
        if (errors) return;

        console.log('submit');
    };

    handleChange = e => {
        const account = {...this.state.account};
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({account});
    };
    render() {
        const {account, errors} = this.state;
        return (
            <div className="containter">
                <h3>Login</h3>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        name="username"
                        label="Username"
                        value={account.username}
                        type="text"
                        error={errors.username ? errors.username: ''}
                        onChange={this.handleChange}
                    />
                    <Input
                        name="password"
                        label="Password"
                        value={account.password}
                        type="password"
                        error={errors.password}
                        onChange={this.handleChange}
                    />
{/*                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password"
                               className="form-control"
                               id="password"
                               name="password"
                               value={account.password}
                               onChange={this.handleChange}
                               placeholder="Password" />
                    </div>*/}
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}


export default LoginForm;
