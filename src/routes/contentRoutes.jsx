import React from 'react';
import Hash from '../pages/hash'
import Index from '../pages/index'
import {Route, Switch,Redirect } from 'react-router-dom'

export default class ContentRoutes extends React.Component {
    render() {
        return <Switch>
            <Redirect exact strict from="/app" to="/app/index" />
            <Route exact path="/app/index" component={Index} />
            <Route exact path="/app/hash" component={Hash} />
          </Switch>;
    }
}