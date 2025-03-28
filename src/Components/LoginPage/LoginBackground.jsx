import styled from "styled-components";
import background1 from "../../Images/Backgrounds/cassino-background.png"
import gerson from "../../Images/Backgrounds/full_gerson.png"

const Container = styled.section`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${background1});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 40%;
    background-color: rgba(0, 0, 0, 0.65);
    background-blend-mode: darken;
    z-index: 0;

    transition: all 0.1s ease-in-out;

    font-size: var(--main-subtitle-font);
    text-shadow:
    0 0 3rem black,
    0 0 3em black,
    0 0 3em black,
    0 0 3rem black,
    0 0 3em black,
    0 0 3em black;

    h2 {
        font-size: calc(2.5vw + 2.5vh - 1rem);
        font-weight: 800;
    }

    p {
        font-size: var(--main-subtitle-font);
    }
`

const Gerson = styled.img`
    height: 0%;
    right: 0;
    bottom: -20%;
    position: absolute;
    z-index: -1;
    filter: brightness(75%);
`

export default function LoginBackground () {
    return (
        <Container>
            <Gerson src={gerson} alt="Gerson" />
            <h2>OLÁ NOVAMENTE!</h2>
            <p>Gerson estava te esperando</p>
        </Container>
    )
}