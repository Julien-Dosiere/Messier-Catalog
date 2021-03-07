// == Import npm
import React, { useState } from 'react';

import Login from '../Login';
import Search from '../Search';
import TrackResults from '../TrackResults';

import trackSearch from '../../data/track_search';

import 'semantic-ui-css/semantic.min.css';
import './app.scss';
// == Composant
const App = () => {
  const [search, setSearch]: [string, any]= useState('');
  const [token, setToken]: [string, any] = useState('');
  return (
    <div className="app">
      <Login
        accessToken={token}
        setAccessToken={setToken}
      />
      <Search
        searchValue={search}
        setSearchValue={setSearch}
        placeholder="Chercher une chanson"
      />
      <TrackResults />
    </div>
  );
};

// == Export
export default App;
