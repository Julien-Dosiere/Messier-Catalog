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
import Details from '../Details';



// override necessary for react-spinners
const override = css`
  display: block;
  margin: 15px auto;
  border-color: red;
`;


// == Component
const App = ({isLoading, detailMode}: { isLoading: boolean, detailMode: boolean }) => {
    console.log(detailMode)
    return (

        <div className="app">
            {detailMode == false && <Redirect to="/"/>}

            <Search/>
                <Spinner
                    css={override}
                    color={"#00EE55"}
                    loading={isLoading}
                    height={55}
                    width={6}
                    margin={4}
                />
                <Route exact strict path={["/"]}>
                    <Results/>
                </Route>
                <Route path={["/details"]}>
                    <Details />
                </Route>
        </div>
    );
};


const mapStateToProps = (state: State) => {
    return {
        isLoading: state.isLoading,
        detailMode: state.detailMode
    };
};

const mapDispatchToProps = () => {
    return {};
};


export default connect(mapStateToProps, mapDispatchToProps)(App);


