import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom'
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
        <Form
            className="search__form"
            onSubmit={ makeSearch }
        >
            {/* Champ controlé classique, mais avec un <Input> de semantic ui */}
            <Input
                fluid
                icon="search"
                placeholder= "search"
                value={searchValue}
                onChange={ setSearchValue }
            />
        </Form>
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
            dispatch({
                type: 'MAKE_SEARCH',
                payload: {
                }
            });
        },


    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
