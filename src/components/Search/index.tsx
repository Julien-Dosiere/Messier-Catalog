import React from 'react';
import {Route, Link} from 'react-router-dom'

import Search from "./search";

import { Image, Button, Segment} from 'semantic-ui-react';
import logoSpotify from '../../assets/logo-datastro.png';
import './search.scss';

const SearchBar = () => (
    <>
        <Image centered size="medium" src={logoSpotify}/>
        <Segment>
            <Route exact strict path={["/", "/track"]}>
                <Search/>
            </Route>
        </Segment>
    </>
);


export default SearchBar
