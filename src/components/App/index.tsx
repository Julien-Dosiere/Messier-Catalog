// == Import npm
import React, {useState} from 'react';
import {Redirect, Route} from 'react-router-dom';
import Login from '../Login';
import Search from '../Search';
import TrackResults from '../TrackResults';

import trackSearch from '../../data/track_search';

import 'semantic-ui-css/semantic.min.css';
import './app.scss';
import LoaderIcon from "react-spinners/GridLoader";
import {css} from "@emotion/core";
import {connect} from "react-redux";

const override = css`
  display: block;
  margin: 15px auto;
  border-color: red;
`;


// == Composant
const App = ({isLoading}: { isLoading: boolean }) => {
    return (
        <div className="app">



            <Login/>
                <Search/>

                <LoaderIcon
                    css={override}
                    size={20}
                    color={"#00FF00"}
                    loading={isLoading}
                />
            <Route exact strict path={["/", "/track"]}>
                <TrackResults/>
            </Route>
            <Route path={["/artist"]}>
                <button>test</button>
            </Route>
        </div>
    );
};


const mapStateToProps = (state: State) => {

    return {
        isLoading: state.isLoading
    };
};

const mapDispatchToProps = () => {
    return {};
};


export default connect(mapStateToProps, mapDispatchToProps)(App);


