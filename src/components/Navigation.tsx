import React from 'react';
import styled from 'styled-components';

/*
 * Styling
*/
const Container = styled.div`
    height: 20px;
    background: blanchedalmond;
`;

/*
 * Component
*/
const Navigation = () => {
    return (
        <Container>
            This is the navigation with another text that i have pushed
        </Container>
    )
}

export default Navigation;