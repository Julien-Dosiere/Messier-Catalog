import React from 'react';
import PropTypes from 'prop-types';
import {useLocation} from 'react-router-dom'
import {Input, Form, Image, Button, Segment} from 'semantic-ui-react';

import logoSpotify from '../../assets/logo_spotify.png';
import './search.scss';
import {connect} from "react-redux";

const ArtistSearch = (
    {
        searchValue,
        setSearchValue,
        makeSearch
    }: {
        searchValue: string,
        setSearchValue: GenericCallback,
        makeSearch: GenericCallback
    }
) => (
    <>
        <Form
            className="search__form"
            onSubmit={makeSearch}
        >
            <Input
                fluid
                icon="search"
                placeholder="search for artist"
                value={searchValue}
                onChange={setSearchValue}
            />
        </Form>
    </>
);


const mapStateToProps = (state: State) => {
    return {
        searchValue: state.searchValue,
    };
};

const mapDispatchToProps = (dispatch: (...args: any[]) => any) => {
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
                type: 'ARTIST_SEARCH',
            });
        },
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ArtistSearch);
