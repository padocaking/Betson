import styled from "styled-components";
import background1 from "../../Images/Backgrounds/gerson-familia-cassino.png"
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
    background-position: 55%;
    background-color: rgba(0, 0, 0, 0.1);
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
        font-size: calc(2.5vw + 2.5vh - 0.1rem);
        font-weight: 800;
        color: var(--main-theme-two);
        display: none;
    }

    p {
        font-size: var(--main-subtitle-font);
        text-align: center;
        max-width: 80%;
        display: none;
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

export default function SignupBackground () {
    return (
        <Container>
            <Gerson src={gerson} alt="Gerson" />
            <h2>BEM VINDO!</h2>
            <p>Gerson era apenas um viciado em apostas, que lhe causavam problemas familiares, profissionais e psicológicas, porém tudo mudou quando Gerson usou todos fundos de sua família e colocou no verde. Agora Gerson dedica sua vida para mudar a vida de pessoas através das apostas. Junte a Gerson e se torne um vencedor!</p>
        </Container>
    )
}