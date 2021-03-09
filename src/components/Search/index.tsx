import React from 'react';
import {Route} from 'react-router-dom'

import TrackSearch from "./trackSearch";
import ArtistSearch from "./artistSearch"

import { Image, Button, Segment} from 'semantic-ui-react';
import logoSpotify from '../../assets/logo_spotify.png';
import './search.scss';

const SearchBar = () => (
    <>
        <Image centered size="medium" src={logoSpotify}/>
        <Segment>
            <a href="/track">
                <Button color={"green"}>
                    Track Search
                </Button>
            </a>
            <a href="/artist">
                <Button color={"green"}>
                    Artist Search
                </Button>
            </a>
            <Route exact strict path={["/", "/track"]}>
                <TrackSearch/>
            </Route>
            <Route path={["/artist"]}>
                <ArtistSearch/>
            </Route>
        </Segment>
    </>
);


export default SearchBar
