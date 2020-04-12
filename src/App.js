/**
 * file     : App.js
 * author   : apagadorjr
 */
import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Routes from "./components/routes/Routes";
// import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faTable, faCog, faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import favicon from './assets/images/favicon.ico';
import 'local-storage'

import "./App.css";

class App extends Component {
  /**
   * 
   */
  static propTypes = {

  };

  /**
   * 
   */
  constructor(props) {
    super(props);

    

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true,
      user: {}
    }
  }

  /**
   * 
   */
  async componentDidMount() {

    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    if (isAuthenticated) {
      console.log('componentDidMount()', 'user already authenticated');
      this.userHasAuthenticated(true);

      this.setState({
        user: localStorage.getItem('user')
      });

    } else {
      console.log('componentDidMount()', 'user not yet authenticated');
      //this.props.history.push('/login')
    }

    this.setState({ 
      isAuthenticating: false 
    });

  }

  /**
   * 
   */
  userHasAuthenticated = authenticated => {
    console.log('userHasAuthenticated()');

    this.setState({
      isAuthenticated: authenticated
    });

    localStorage.setItem('isAuthenticated', authenticated ? 'true' : 'false');

    if (authenticated) {

      // todo: get user information from somewhere, then save to local store
      localStorage.setItem('user', {});

      console.log('userHasAuthenticated() redirecting to home page...');
      //this.props.history.push('/');
    } else {

      localStorage.removeItem('user');

      
    }
    
  }

  /**
   * 
   */
  handleLogout = event => {

    // do necessary logout actions, probably on backend

    this.userHasAuthenticated(false);

    //localStorage.removeItem('isAuthenticated');

  }
  
  /**
   * 
   */
  handleRedirect = event => {
    console.log('event', event);
    console.log('target', event.target);
    const target = event.target;

    console.log(target.getAttribute('path'));
    if (target.getAttribute('path')) {
      this.props.history.push(target.getAttribute('path'));
    }
  }

  /**
   * 
   */
  render() {

    const childProps = {
      user: this.state.user,
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
  
    // only render when state is ready
    return (
      !this.state.isAuthenticating &&
      <div className="App container">
        <Navbar bg="light" expand="lg" fixed="top">
            <Navbar.Brand>
              <img
                alt=""
                src={favicon}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              {' React Bootstrap'}
            </Navbar.Brand>
            <Navbar.Toggle />
            {
              this.state.isAuthenticated
              ? <Fragment>
                  <Navbar.Collapse>
                    <Nav>
                      <Nav.Link onClick={this.handleRedirect} path='/'>
                        <FontAwesomeIcon icon={faHome} />
                        {' Home'}
                      </Nav.Link>
                      <Nav.Link onClick={this.handleRedirect} path='/reports'>
                        <FontAwesomeIcon icon={faTable} />
                        {' Reports'}
                      </Nav.Link>
                      <Nav.Link onClick={this.handleRedirect} path='/settings'>
                        <FontAwesomeIcon icon={faCog} />
                        {' Settings'}
                      </Nav.Link>
                      <Nav.Link onClick={this.handleLogout}>
                        <FontAwesomeIcon icon={faSignOutAlt} />
                        {' Logout'}
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                  <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                      Signed in as: <a href="#login">Bikoy</a>
                    </Navbar.Text>
                  </Navbar.Collapse>
                </Fragment>
              : <Fragment>
                  <Navbar.Collapse className="justify-content-end">
                    {/* <LinkContainer to="/login"> */}
                    <Nav.Link>
                      <FontAwesomeIcon icon={faSignInAlt} />
                      {' Login'}
                    </Nav.Link>
                    {/* </LinkContainer> */}
                  </Navbar.Collapse>
                  
                </Fragment>
            }
        </Navbar>
        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default withRouter(App);
