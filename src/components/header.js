import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background: #ced3dc;
    align-content: center;
`;

const NavContainer = styled.div`
    display: grid;
    grid-template-columns: 20% 1fr;
    align-content: center;
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
`;

const LinkContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    opacity: 0.7;
    list-style-type: none;
    > li {
        margin: 0 20px;
    }
    a {
        color: #000;
    }

    li:last-of-type {
        color: #fff;
        border-bottom: 4px solid #fff;
    }
`;

const Header = ({ siteTitle }) => (
    <HeaderContainer>
        <NavContainer>
            <h1 style={{ margin: 0 }}>
                <Link
                    to='/'
                    style={{
                        color: `white`,
                        textDecoration: `none`,
                    }}
                >
                    {siteTitle}
                </Link>
            </h1>

            <LinkContainer>
                <li>
                    <Link to='/about'>about</Link>
                </li>
                <li>
                    <Link to='/blog'>blog</Link>
                </li>
                <li>
                    <Link to='/shop'>shop</Link>
                </li>
                <li>
                    <Link to='/cart'>cart</Link>
                </li>
            </LinkContainer>
        </NavContainer>
    </HeaderContainer>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
