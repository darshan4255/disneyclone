import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg"/>
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, eum, autem illo alias beatae dolorum minima voluptate pariatur aut nam facilis, modi eligendi dolore! Sequi ipsa culpa quos unde ipsum?
                    </Description>
                    <CTALogoTwo src="/images/cta-logo-two.png" />
                </CTA>
        </Container>
    )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;

    &:before{
        position: absolute;
        background-image: url("/images/login-background.jpg");
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0.7;
        z-index: -1;
    }
`

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
`
const CTALogoOne = styled.img`

`
const SignUp = styled.a`
    width: 100%;
    background: #0063e5;
    font-weight: bold;
    padding: 17px 0px;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center; 
    cursor: pointer;
    font-size: 18px;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover{
        background: #0483ee;
    }
`
const Description = styled.p`
    text-align: center;
    font-size: 11px;
    letter-spacing: 1.5px;
    line-height: 1.5;
`
const CTALogoTwo = styled.img`
    width: 90%;
`
