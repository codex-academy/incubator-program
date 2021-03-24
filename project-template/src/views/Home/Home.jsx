import React from 'react'
import styled from 'styled-components';
import { Card } from '@material-ui/core';

const Base = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`

const StyledCard = styled(Card)`
    width: 100%;
    max-width: 600px;
`

export const Home = (props) => {
    const { value, children } = props;

    return (
        <Base>
            <StyledCard>
                <ul>
                    <li>children: {children}</li>    
                    <li>value: {value}</li>
                </ul>
            </StyledCard>
        </Base>
    )
}

export default Home
