import styled, { keyframes } from "styled-components";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { FcGoogle } from "react-icons/fc";
import background1 from "../Images/Backgrounds/cassino_background.jpg"

const Container = styled.div`
    height: var(--main-height);
    width: 100%;
    display: flex;
`

const Left = styled.div`
    background-color: var(--dark);
    flex: 1;
`

const Right = styled.div`
    background-color: var(--dark-two);
    flex: 1;
`

const FormHolder = styled.main`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        z-index: 0;
        width: 60%;

        h2 {
            font-size: var(--main-title-font);
        }

        span {
            font-size: var(--main-med-font);
        }

        input {
            width: 100%;
        }

        button {
            width: 80%;
            margin-top: 5px;
        }

        .icon {
            font-size: 1.75rem;
            margin-right: 0.5rem;
        }
    }
`

const Link = styled.span`
    cursor: pointer;
    background-image: linear-gradient(90deg, var(--main-theme), var(--main-theme-two));
    background-clip: text;
    color: transparent;
    position: relative;

    &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 1px;
        background-image: linear-gradient(90deg, var(--main-theme), var(--main-theme-two));
    }

    &:hover {
        &:after {
            transition: width 0.05s linear;
            width: 100%;
        }
    }
`

const BackgroundHolder = styled.section`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${background1});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: 40%;
    background-color: rgba(0, 0, 0, 0.65);
    background-blend-mode: darken;

    font-size: var(--main-subtitle-font);
    text-shadow:
    0 0 3rem black,
    0 0 3em black,
    0 0 3em black,
    0 0 3rem black,
    0 0 3em black,
    0 0 3em black;
`

export default function Login () {
    return (
        <Container>
            <Left>
                <FormHolder>
                    <form action="#">
                        <h2>Entrar</h2>
                        <Input type="email" placeholder="E-mail" />
                        <Input type="password" placeholder="Senha" />
                        <Link>Esqueci a minha senha</Link>
                        <Button bold={true}>ENTRAR</Button>
                        <Button styled={true}><FcGoogle className="icon" />Entrar com conta Google</Button>
                        <span>Não possui uma conta? <Link>Clique aqui</Link></span>
                    </form>
                </FormHolder>
            </Left>
            <Right>
                <BackgroundHolder>
                    <h2>OLÁ NOVAMENTE!</h2>
                    <p>Gerson estava te esperando</p>
                </BackgroundHolder>
            </Right>
        </Container>
    )
}