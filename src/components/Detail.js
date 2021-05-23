import React,{ useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import db from '../firebase';

function Detail() {

    const { id } = useParams();
    const [ movie, setMovie ] = useState({});

    useEffect(() => {
        //Grab the movies from database
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc) => {
            if(doc.exists){
                //Save the movie data
                setMovie(doc.data());
            }else{
                //HomePage
            }
        })

    }, [])

    return (
        <Container>
            { movie &&
            <>
                <Background>
                    <img src={movie.backgroundImg} alt={movie.title}/>
                </Background>
                <Imagetitle>
                    <img src={movie.titleImg} alt={movie.title}/>
                </Imagetitle>
                <ContentMeta>
                    <Controls>
                        <PlayButton>
                            <img src="/images/play-icon-black.png" />
                            <span>PLAY</span>
                        </PlayButton>
                        <TrailerButton>
                            <img src="/images/play-icon-white.png" />
                            <span>Trailer</span>
                        </TrailerButton>
                        <AddButton>
                            <span>+</span>
                        </AddButton>
                        <GroupButton>
                            <img src="/images/group-icon.png" />
                        </GroupButton>
                    </Controls>
                    <SubTitle>
                        {movie.subTitle}
                    </SubTitle>
                    <Description>
                        {movie.description}
                    </Description>
                </ContentMeta>
            </>
            }
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 250px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
    display: block;
    top: 72px;
`
const Background = styled.div`
    position: fixed;
    top:0;
    left:0;
    right:0;
    z-index: -1;
    opacity: 0.8;
    
    img{
        width: 100vw;
        height: 100vh;

        @media (max-width: 768px){
            width: initial;
        }
    }
`
const Imagetitle = styled.div`
    align-items: flex-end;
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    margin: 0px auto;
    height: 30vw;
    min-height: 170px;
    width: 100%;
    padding-bottom: 24px;

    img{
        max-width: 600px;
        min-width: 200px;
        width: 35vw;
    }
`
const ContentMeta = styled.div`
    max-width: 874px;
`
const Controls = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin: 24px 0px;
    min-height: 56px;
`

const PlayButton = styled.button`
    font-size: 15px;
    margin: 0px 22px 0px 0px;
    padding: 0px 24px;
    height: 56px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1.8px;
    text-align: center;
    text-transform: uppercase;
    background: rgb (249, 249, 249);
    border: none;
    color: rgb(0, 0, 0);

    img {
        width: 32px;
    }

    &:hover {
        background: rgb(198, 198, 198);
    }

    @media (max-width: 768px) {
        height: 45px;
        padding: 0px 12px;
        font-size: 12px;
        margin: 0px 10px 0px 0px;

        img {
        width: 25px;
        }
    }
`
const TrailerButton = styled(PlayButton)`
    background: rgb(0, 0, 0, 0.3);
    color: rgb(249, 249, 249);
    border: 1px solid rgb(249, 249, 249);
    text-transform: uppercase;
`
const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgb(0, 0, 0, 0.6);
    cursor: pointer;

    span{
        font-size: 30px;
        color: white;
    }
`
const GroupButton = styled(AddButton)`
    background-color: rgb(0, 0, 0);
`
const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`
const Description = styled.div`
    color: rgb(249, 249, 249);
    line-height: 1.4;
    padding: 16px 0px;
    font-size: 20px; 

    @media (max-width: 768px) {
        font-size: 14px;
    }
`