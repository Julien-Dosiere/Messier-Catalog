import React from 'react';
import {Route, Link} from 'react-router-dom'

import Search from "./search";

import { Image, Button, Segment} from 'semantic-ui-react';
import logo from '../../assets/logo-datastro.png';
import './search.scss';

const SearchBar = () => (
    <>
        <Image centered size="medium" src={logo}/>
        <Segment className="search">

                <Search/>


        </Segment>
    </>
);


export default SearchBar
