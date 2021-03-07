import React from 'react';
import PropTypes from 'prop-types';

import { Input, Form, Image } from 'semantic-ui-react';

import logoSpotify from 'src/assets/logo_spotify.png';
import './search.scss';

const SearchBar = ({
  searchValue, setSearchValue, placeholder,
}) => (
  <>
    <Image centered size="medium" src={logoSpotify} />
    <Form
      className="search__form"
    >
      {/* Champ controlé classique, mais avec un <Input> de semantic ui */}
      <Input
        fluid
        icon="search"
        placeholder={placeholder}
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.value);
        }}
      />
    </Form>
  </>
);

SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default SearchBar;
