import React from 'react';
import PropTypes from 'prop-types';

import { Input } from 'semantic-ui-react';

import './login.scss';

const Login = ({
  accessToken, setAccessToken,
}) => (
  <Input
    className="login"
    icon="lock open"
    placeholder="Access token"
    value={accessToken}
    onChange={() => {
      setAccessToken(accessToken);
    }}
  />
);

Login.propTypes = {
  accessToken: PropTypes.string.isRequired,
  setAccessToken: PropTypes.func.isRequired,
};

export default Login;
