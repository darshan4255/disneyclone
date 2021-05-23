import React, {useEffect} from 'react'
import { auth, provider } from '../firebase'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { selectUserName, selectUserPhoto, setUserLogin, setSignOut } from '../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'

function Header() {
    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user){
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                history.push("/home")
            }
        })

    },[])

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {

            let user = result.user;
            dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }))
            history.push("/home")
        })
    }

    const signOut = () => {
        auth.signOut()
        .then(() => {
            dispatch(setSignOut())
            history.push("/")
        })
    }

    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="Disney+" />
            </Logo>
            { !userName?(
                <LoginContainer>
                    <Login onClick={signIn}>Login</Login>
                </LoginContainer>
            ) : (
                <>
                <NavMenu>
                    <a href="/home">
                        <img src="/images/home-icon.svg" alt="HOME" />
                        <span>HOME</span>
                    </a>
                    <a>
                        <img src="/images/search-icon.svg" alt="SEARCH" />
                        <span>SEARCH</span>
                    </a>
                    <a>
                        <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
                        <span>WATCHLIST</span>
                    </a>
                    <a>
                        <img src="/images/original-icon.svg" alt="ORIGINALS" />
                        <span>ORIGINALS</span>
                    </a>
                    <a>
                        <img src="/images/movie-icon.svg" alt="MOVIES" />
                        <span>MOVIES</span>
                    </a>
                    <a>
                        <img src="/images/series-icon.svg" alt="SERIES" />
                        <span>SERIES</span>
                    </a>
                </NavMenu>
                <DisplayName>
                        <span>{userName}</span>
                </DisplayName>
                <SignOut>
                    <UserImg src={userPhoto} alt={userName}></UserImg>
                    <DropDown>
                        <span onClick={signOut}>Signout</span>
                    </DropDown>
                </SignOut>
            </>
            )
            }
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    position: fixed;
    top:0;
    left:0;
    right:0;
    height: 70px;
    background-color: #090b13; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 2;
`
const Logo = styled.a`
    width:80px;
    padding: 0;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;

    img{
        display: block;
        width: 100%;
    }
`
const NavMenu = styled.div`
    display: flex;
    ${'' /* flex: 1; */}
    align-items: center;
    justify-content: flex-end;
    flex-flow: row nowrap;
    height: 100%;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;
    cursor: pointer;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        text-decoration: none;

        img {
            height: 20px;
            min-width: 20px;
            width: 20px;
            z-index: auto;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            color: rgb(249,249,249);
            line-height: 1.08;
            padding: 2px 0px;
            white-space: nowrap;
            position: relative;

            &:before {
                content:"";
                height: 2px;
                background-color: rgb(249,249,249);
                border-radius: 0px 0px 4px 4px;
                height: 2px;
                width: auto;
                position: absolute;
                left:0;
                right:0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
                visibility: hidden;
            }
        }

        &:hover{
            span:before{
                transform: scaleX(1);
                opacity: 1 !important;
                visibility: visible;
            }
        }
    }
`
const UserImg = styled.img `
    height: 100%;
`
const Login = styled.div`
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgb(0, 0, 0, 0.6);
    cursor: pointer;
    transition: all 250ms ease 0s;

    &:hover{
        background-color: #f9f9f9;
        border-color: transparent;
        color: #000;
    }
`
const LoginContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`
const DropDown = styled.div`
    position: absolute;
    top: 48px;
    right: 0px;
    background: rgb(19, 19, 19);
    border: 1px solid rgba(151, 151, 151, 0.34);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    letter-spacing: 3px;
    width: 100px;
    opacity: 0;
    text-transform: uppercase;
`
const SignOut = styled.div`
    position: relative;
    height: 48px;
    width: 48px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    ${UserImg} {
        border-radius: 50%;
        width: 100%;
        height: 100%;
    }

    &:hover {
        ${DropDown} {
        opacity: 1;
        transition-duration: 0.7s;
        
        &:hover{
            background: rgb(249, 249, 249, 0.8);
            color: #000;
        }
        }
    }
`
const DisplayName = styled.div`
    height: 10vh;
    min-width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;

    span{
        color: rgb(249, 249, 249, 0.95);
        font-size: 17px;
        letter-spacing: 1.42px;
        line-height: 1.08;
        padding: 2px 0px;
        white-space: nowrap;
    }
`