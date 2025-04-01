import styled, { keyframes } from "styled-components";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { useEffect } from "react";


const Container = styled.section`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3%;
    background-color: var(--dark-two);

    h2 {
        font-size: calc(2.5vw + 2.5vh - 1rem);
        font-weight: 800;
        letter-spacing: 0.5rem;
    }

    span {
        letter-spacing: 1px;
        font-size: var(--main-max-font);
    }

    .highlight {
        color: var(--main-theme-two);
    }
`

const TextAnimation = keyframes`
    from {height: 0px;}
    to {height: 100%;}
`

const Paragraphs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    position: relative;
    max-width: 70%;
    
    p {
        font-size: var(--main-max-font);
        stroke-width: 20px;
        letter-spacing: 2px;
        font-weight: 300;
        font-style: italic;
        text-align: center;
        overflow: hidden;
        animation-name: ${TextAnimation};
        animation-duration: 1.5s;
    }

    .quote {
        position: absolute;
        font-size: 3rem;

        > * {
            color: var(--main-theme-two);
        }
    }

    .open {
        top: -3rem;
        left: 0;
    }

    .close {
        bottom: -1rem;
        right: 0;
    }
`

export default function LoginBackground () {
    return (
        <Container>
            <h2 className="">OLÁ!</h2>
            <Paragraphs className="paragraph-animation">
                <FaQuoteLeft className="open quote" />
                <FaQuoteRight className="close quote"  />
                <p>Para alguém com viciado em jogos de azar, a sensação de jogar é a sua droga. A compulsão pelo jogo altera o humor e o estado de espírito do jogador. Assim como em outros vícios, o dependente desenvolve uma tolerância e vai precisando jogar cada vez mais para se satisfazer. Muito comum ver jogadores viciados perseguindo suas perdas, acreditando que se continuarem jogando vão recuperar o dinheiro perdido. Com a rotina de jogo, o hábito se cria e a vontade de jogar torna–se incontrolável.
                E, como citado no início, a pessoa viciada será a última a perceber o problema.</p>
            </Paragraphs>
            <span>- Marcos, <span className="highlight">Gean</span></span>
        </Container>
    )
}