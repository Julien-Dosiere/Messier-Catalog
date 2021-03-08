import React from 'react';
import PropTypes from 'prop-types';
import {Route, useLocation} from 'react-router-dom'
import TrackSearch from "./trackSearch";
import ArtistSearch from "./artistSearch"
import {Input, Form, Image, Button, Segment} from 'semantic-ui-react';

import logoSpotify from '../../assets/logo_spotify.png';
import './search.scss';
import {connect} from "react-redux";

const SearchBar = (
    {
        searchValue,
        setSearchValue,
        makeSearch,
        //makeSearch
    }: {
        searchValue: string,
        setSearchValue: GenericCallback,
        makeSearch: GenericCallback
    }
) => (
  <>
    <Image centered size="medium" src={logoSpotify} />
    <Segment>
      <a href="/track">
          <Button  color={"green"}>
              Track Search
          </Button>
      </a>
      <a href="/artist">
          <Button  color={"green"}>
              Artist Search
          </Button>
      </a>
        <Button  color={"green"}>
            { useLocation().pathname }
        </Button>
        <Route exact strict path={["/", "/track"]}>
            <TrackSearch />
        </Route>
        <Route path={["/artist"]}>
            <ArtistSearch />
        </Route>
    </Segment>
</>
);


const mapStateToProps = (state: State) => {

    return {
        searchValue: state.searchValue,
    }; };

const mapDispatchToProps = (dispatch: (...args: any[])=>any) => {
    return {
        setSearchValue: (event: GenericObject) => {
            dispatch({
                type: 'SET_SEARCH_VALUE',
                payload: {
                    text: event.target.value,
                }
            });
        },
        makeSearch: (event: GenericObject) => {
            const location = useLocation().pathname
            if (location === "/track") {
                dispatch({
                    type: 'MAKE_SEARCH',
                    payload: {}
                });
            }
        },


    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
