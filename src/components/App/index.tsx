// == Import React modules
import React, {useState} from 'react';
import {Redirect, Route} from 'react-router-dom';
import {connect} from "react-redux";
// extra packages
import 'semantic-ui-css/semantic.min.css';
import './app.scss';
import Spinner from "react-spinners/ScaleLoader";
import {css} from "@emotion/core";


// == Components
import Search from '../Search';
import Results from '../Results';




// override necessary for react-spinners
const override = css`
  display: block;
  margin: 15px auto;
  border-color: red;
`;


// == Component
const App = ({isLoading}: { isLoading: boolean }) => {
    return (
        <div className="app">
                <Search/>
                <Spinner
                    css={override}
                    color={"#00EE55"}
                    loading={isLoading}
                    height={55}
                    width={6}
                    margin={4}
                />

            <Route exact strict path={["/", "/track"]}>
                <Results/>
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


