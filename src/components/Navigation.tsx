import React, { useState } from 'react';
import styled from 'styled-components';
import Overlay from './Overlay';

/*
 * Styling
*/
const List = styled.ul`
    background: blanchedalmond;
    list-style-type: none;
    display: flex;
    gap: 2.5em;
    margin: 0;
    padding: 10px 10px 10px 15px;
`;

const ListItem = styled.li`

`;

const Logo = styled.div`
    font-weight: bold;
`;

const Login = styled.div`
    margin-left: auto;
    padding-right: 15px;
    cursor: pointer;
`;

/*
 * Component
*/
const Navigation = () => {
    const [showOverlay, setShowOverlay] = useState(false);


    const toggleOverlay = () => {
        setShowOverlay(!showOverlay)
    }

    return (
        <div>
            <List>
                <Logo>Nutrinfo</Logo>
                <ListItem>
                    Nutrition
                </ListItem>
                <ListItem>
                    Information
                </ListItem>
                <ListItem>
                    Media
                </ListItem>
                <ListItem>
                    Impressum
                </ListItem>
                <Login onClick={toggleOverlay}>
                    Login
                </Login>
            </List>
            { showOverlay ? <Overlay onClose={toggleOverlay} /> : null}
            
        </div>
    )
}

export default Navigation;