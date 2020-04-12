/**
 * file     : Routes.js
 * author   : apagadorjr
 */
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/home/Home";
import Reports from "../pages/reports/Reports";
import Settings from "../pages/settings/Settings";
import Login from "../pages/login/Login"
import NotFound from "../pages/notFound/NotFound";
import AuthenticatedRoute from "./AuthenticatedRoute";
import UnauthenticatedRoute from "./UnauthenticatedRoute";

/**
 * 
 */
export default ({ 
  childProps 
}) =>
  <Switch>
    <AuthenticatedRoute path="/" exact component={Home} props={childProps} />
    <AuthenticatedRoute path="/reports" exact component={Reports} props={childProps} />
    <AuthenticatedRoute path="/settings" exact component={Settings} props={childProps} />
    <UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
    <Route component={NotFound} />
  </Switch>;
