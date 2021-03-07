// == Import npm
import React, { useState } from 'react';

import Login from 'src/components/Login';
import Search from 'src/components/Search';
import TrackResults from 'src/components/TrackResults';

import trackSearch from 'src/data/track_search';

import 'semantic-ui-css/semantic.min.css';
import './app.scss';

// == Composant
const App = () => {
  const [search, setSearch] = useState('');
  const [token, setToken] = useState('');

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
      <TrackResults results={trackSearch} />
    </div>
  );
};

// == Export
export default App;
