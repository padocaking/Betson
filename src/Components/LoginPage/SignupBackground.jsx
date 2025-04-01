import styled, { keyframes } from "styled-components";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";


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
        max-width: 50%;
        text-align: center;
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
            <h2 className="">MUDE SUA VIDA!</h2>
            <Paragraphs>
                <FaQuoteLeft className="open quote" />
                <FaQuoteRight className="close quote"  />
                <p>Gerson era apenas um viciado em apostas, que lhe causavam problemas familiares, profissionais e psicológicas, porém tudo mudou quando Gerson usou todos fundos de sua família e colocou no verde. Agora Gerson dedica sua vida para mudar a vida de pessoas através das apostas. Junte a Gerson e se torne um <span className="highlight">VENCEDOR</span>!</p>
            </Paragraphs>
        </Container>
    )
}
<p></p>