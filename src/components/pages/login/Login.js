/**
 * file     : Login.js
 * author   : apagadorjr
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FormGroup, FormControl, FormLabel} from "react-bootstrap";
import LoaderButton from "../../commons/loaderButton/LoaderButton";
import "./Login.css";

/**
 * 
 */
export default class Login extends Component {

    /**
     * 
     */
    static propTypes = {
        userHasAuthenticated : PropTypes.func.isRequired
    };

    /**
     * 
     */
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            email: '',
            password: ''
        };
    }

    /**
     * 
     */
    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    } 

    /**
     * 
     */
    handleSubmit = e => {
        e.preventDefault();

        this.setState({ isLoading: true });

        // temporary delay
        setTimeout(() => {
            try {
                this.props.userHasAuthenticated(true);
                //this.props.history.push('/');
            } catch (e) {
                alert(e.message);
            } finally {
                this.setState({
                    isLoading: false,
                    email: '',
                    password: ''
                });
            }
        }, 2500);
       
    }

    /**
     * 
     */
    validateForm = () => {
        return this.state.email.length > 0 &&
            this.state.password.length > 0
    }
    
    /**
     * 
     */
    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId='email' size="large">
                        <FormLabel>Email</FormLabel>
                        <FormControl
                            autoFocus
                            type='email'
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId='password' size='large'>
                        <FormLabel>Password</FormLabel>
                        <FormControl
                            type='password'
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <LoaderButton
                        block
                        size="large"
                        disabled={!this.validateForm()}
                        type="submit"
                        isLoading={this.state.isLoading}
                        text="Login"
                        loadingText="Logging in…"
                        />

                </form>
            </div>
        );
    };
    
}