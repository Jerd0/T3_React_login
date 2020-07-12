import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';
import Login from '../Login/login';
import Table from '../UsersList/usersTable';
import { connect } from 'react-redux';

export const AppRouter = (props) => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/login' component={ Login }/>
            <Route path='/users' render={() => (
                props.token !== null ?  (<Table token={ props.token }/>) : (<Redirect to='/login'/>)
            )}/>
            <Redirect from='' to='/login' />
        </Switch>
    </BrowserRouter>
);

const mapStateToProps = (state) => {
    return {
        token: state.token.token
    }
};

export default connect(mapStateToProps)(AppRouter);
