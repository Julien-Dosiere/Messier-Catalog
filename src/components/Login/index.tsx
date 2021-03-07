import React from 'react';

import { Input } from 'semantic-ui-react';

import './login.scss';
import {connect} from "react-redux";

// @ts-ignore
const Login = (
    { accessToken, setToken}:
        { accessToken: string, setToken: GenericCallback}
    ) => (
  <Input
    className="login"
    icon="lock open"
    placeholder="Access token"
    value={accessToken}
    onChange={setToken}
  />
);


const mapStateToProps = (state: State) => {

    return {
        accessToken: state.token,
    }; };

const mapDispatchToProps = (dispatch: GenericCallback) => {
    return {
        setToken: (event: GenericObject) => {
            dispatch({
                type: 'SET_TOKEN',
                payload: {
                    text: event.target.value,
                }
            });
        },



    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);
