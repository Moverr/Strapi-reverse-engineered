/**
 *
 * LeftMenuHeader
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';

import Wrapper from './Wrapper';

function LeftMenuHeader() {
  return (
    <Wrapper>
      <Link to="/" className="leftMenuHeaderLink">
        KARMA IS A BITCH
      </Link>
    </Wrapper>
  );
}

export default LeftMenuHeader;