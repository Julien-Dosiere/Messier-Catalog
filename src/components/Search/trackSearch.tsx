import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom'
import {Input, Form, Image, Button, Segment} from 'semantic-ui-react';

import logoSpotify from '../../assets/logo_spotify.png';
import './search.scss';
import {connect} from "react-redux";

const TrackSearch = (
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

        <Form
            className="search__form"
            onSubmit={ makeSearch }
        >
            {/* Champ controlé classique, mais avec un <Input> de semantic ui */}
            <Input
                fluid
                icon="search"
                placeholder= "search for tracks"
                value={searchValue}
                onChange={ setSearchValue }
            />
        </Form>

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
                dispatch({
                    type: 'MAKE_SEARCH',
                    payload: {
                        searchType: "track"
                    }
                });
        },


    };
};


export default connect(mapStateToProps, mapDispatchToProps)(TrackSearch);
