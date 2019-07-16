import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Container = styled.div`
    position: relative;
    max-width: 1500px;
`;

const HeroContainer = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)),
        url('https://images.unsplash.com/photo-1529651737248-dad5e287768e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2801&q=80');
    background-size: cover;
    padding: 4rem 2rem;
    height: 100vh;

    /* Grid styles */
    display: grid;
    align-items: center;
    justify-items: center;
`;

const HeroElement = styled.div`
    /* this is the same as grid-template-columns: 1fr 1fr 1fr 1fr; */
    grid-template-columns: repeat(4, 1fr);
    /* this is the same as grid-template-rows: 300px 300px; */
    grid-template-rows: repeat(2, 300px);
`;

const IndexPage = () => (
    <Layout>
        <Container>
            <HeroContainer>
                <HeroElement>
                    <h2 style={{ color: 'white', fontSize: 32 }}>
                        Taylor's Creations
                    </h2>
                </HeroElement>
                <SEO title='Home' />
                <p style={{ color: 'white', fontSize: 24 }}>
                    Feel free to buy some thangs.
                </p>
                <Link to='/page-2/' style={{ color: 'white', fontSize: 32 }}>
                    Here's a call to action link.
                </Link>
            </HeroContainer>
        </Container>
    </Layout>
);

export default IndexPage;
