// 配置路由规则
import { Router, Route, NavLink, Switch, Redirect } from 'dva/router';
import React, { Component, Fragment } from 'react';
import Home from '../components/Home';
import Signin from '../components/Signin';

export default function ({ history, app }) {
    return (
        <Router history={history}>
            <Fragment>
                <Route path="/home" exact component={Home} />
                <Route path="/signin" component={Signin} />
            </Fragment>
        </Router>
    )
}