import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";
import { FcGoogle } from "react-icons/fc";


const Container = styled.main`
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
            transition: width 0.1s cubic-bezier(0.42, 0, 0.58, 1.00);
            width: 100%;
        }
    }
`

export default function LoginForm ({ setIsLogin }) {
    return (
        <Container>
            <form action="#">
                <h2>Entrar</h2>
                <Input type="email" placeholder="E-mail" />
                <Input type="password" placeholder="Senha" password={true} />
                <Link>Esqueci a minha senha</Link>
                <Button bold={true}>ENTRAR</Button>
                <Button styled={true}><FcGoogle className="icon" />Entrar com conta Google</Button>
                <span>Não possui uma conta? <Link onClick={() => setIsLogin(false)}>Clique aqui</Link></span>
            </form>
        </Container>
    )
}