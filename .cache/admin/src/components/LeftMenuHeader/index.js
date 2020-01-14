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
                <span className="projectName" >
                    RETRO RABBIT
            </span>
            </Link>
        </Wrapper>
    );
}

export default LeftMenuHeader;