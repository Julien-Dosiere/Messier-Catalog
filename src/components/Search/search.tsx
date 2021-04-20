import React from 'react';
import PropTypes from 'prop-types';
import {useLocation, Redirect} from 'react-router-dom'
import {Input, Form, Image, Button, Segment} from 'semantic-ui-react';

import logoSpotify from '../../assets/logo_spotify.png';
import './search.scss';
import {connect} from "react-redux";

const Search = (
    {
        searchValue,
        setSearchValue,
        makeSearch,
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
            <h3>Search in the Messier Catalog:</h3>
            <Input
                fluid
                icon="search"
                placeholder="search for Messier objects"
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
        setSearchValue: (event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch({
                type: 'SET_SEARCH_VALUE',
                payload: {
                    text: event.target.value,
                }
            });
        },
        makeSearch: (event: React.FormEvent<HTMLInputElement>) => {
            event.preventDefault();
            dispatch({
                type: 'TRACK_SEARCH',
            });
        },
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Search);
