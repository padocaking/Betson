import styled from "styled-components";
import background1 from "../../Images/Backgrounds/gerson-jogando.png"
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
    background-position: 75%;
    background-color: rgba(0, 0, 0, 0.2);
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

export default function LoginBackground () {
    return (
        <Container>
            <Gerson src={gerson} alt="Gerson" />
            <h2>OLÁ NOVAMENTE!</h2>
            <p>Para alguém com viciado em jogos de azar, a sensação de jogar é a sua droga. A compulsão pelo jogo altera o humor e o estado de espírito do jogador. Assim como em outros vícios, o dependente desenvolve uma tolerância e vai precisando jogar cada vez mais para se satisfazer. Muito comum ver jogadores viciados perseguindo suas perdas, acreditando que se continuarem jogando vão recuperar o dinheiro perdido. Com a rotina de jogo, o hábito se cria e a vontade de jogar torna–se incontrolável.
            E, como citado no início, a pessoa viciada será a última a perceber o problema.</p>
        </Container>
    )
}