import React, { Component } from 'react';
// import Layout from './containers/Layout/Layout';

import styled from 'styled-components';

const StyledLayout = styled.div`
    padding: 5%;
    color: ${ ({ theme }) => theme.colors.text};

    & h1 {
        font-size: 350%
    }
`;

class App extends Component {
    render() {
        return (
            <StyledLayout>

                <h1>React Boilerplate</h1>
                <h2>Hello World!</h2>

            </StyledLayout>
        );
    }
}

export default App;