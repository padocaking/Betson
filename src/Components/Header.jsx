import styled from "styled-components";
import logo from "../Images/betson-icon.png"
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Container = styled.header`
    background-color: var(--dark);
    width: 100%;
    height: var(--header-height);
    top: 0;
    position: fixed;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: min(15px, 1%) 1.5%;
    box-shadow: 0 0 1px 0 var(--light-two);
`

const Picture = styled.picture`
    height: 100%;
    cursor: pointer;

    &.logo {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        height: 70%;
    }

    img {
        max-height: 100%;
        color: var(--dark);
        font-size: 1.5rem;

        &:hover {
            transform: scale(105%);
        }
    }

    .user {
        border-radius: 100%;
        background-color: var(--light);
        height: 50px;
        width: 50px;
    }
`

const Menu = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    cursor: pointer;

    .menuBar {
        height: 4px;
        width: 40px;
        background-color: var(--light);
        border-radius: 3px;
    }

    &:hover {
        .menuBar {
            height: 5px;
            background-color: white;
        }
    }
`

const LoginBtns = styled.div`
    display: flex;
    gap: 15px;

    button {
        width: 100px;
        font-size: var(--main-med-font);
        height: 45px;
    }
`

export default function Header () {
    const navigate = useNavigate()

    let logged = false

    return (
        <Container>
            <Menu className="icon">
                <div className="menuBar" />
                <div className="menuBar" />
                <div className="menuBar" />
            </Menu>
            <Picture className="center logo" onClick={() => navigate("/")}>
                <img src={logo} alt="BETSON" />
            </Picture>
            {logged ? (
                <Picture className="center">
                    <img src="" alt="?" className="user icon center" />
                </Picture>
            ) : (
                <LoginBtns>
                    <Button onClick={() => navigate("/login")} styled="true">Login</Button>
                    <Button onClick={() => navigate("/signup")}>Signup</Button>
                </LoginBtns>
            )}
        </Container>
    )
}