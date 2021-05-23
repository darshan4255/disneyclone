import React from 'react'
import styled from 'styled-components'

function Footer() {

    

    return (
        <Container>
            <p>Darshan Raval <span dangerouslySetInnerHTML={{ "__html": "&COPY;" }} />2021</p>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    bottom:0;
    left:0;
    right:0;
    height: 3vh;
    width: 100%;
    margin-top: 40px;
    background-color: #090b13; 
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 18px 36px;
    letter-spacing: 13px;
    z-index: 1;

    p{
        color: rgb(249, 249, 249, 0.95);
        font-size: 10px;
        letter-spacing: 5px;
        line-height: 1.08;
        padding: 2px 0px;
        white-space: nowrap;
        text-transform: uppercase;

        span{
            letter-spacing: 7px;
            font-size: 13px;
        }
    }
`