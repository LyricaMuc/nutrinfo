import React, { useState } from "react";
import styled from "styled-components";


/*
 * Styling
*/
const Container = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    cursor: pointer;
    z-index: 9;
`;

const Wrapper = styled.div`
    background-color: white;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    z-index: 10;
    padding: 30px;
    width: fit-content;
    height: fit-content;
`;

const Overlay = (props: any) => {
    const { children, onClose } = props;

    return (
        <Container>
            <Wrapper>
                <div onClick={onClose}>X</div>
                Test blabla blablabla
            </Wrapper>
        </Container>
    )
}


export default Overlay;