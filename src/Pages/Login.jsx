import styled, { keyframes } from "styled-components";
import LoginForm from "../Components/LoginForm";
import LoginBackground from "../Components/LoginBackground";
import SignupForm from "../Components/SignupForm";
import { useState } from "react";

const slotIn = keyframes`
    0% {transform: translateY(-100%);}
    100% {transform: translateY(0%);}
`

const slotOut = keyframes`
    0% {transform: translateY(0%);}
    100% {transform: translateY(100%);}
`

const Container = styled.div`
    height: var(--main-height);
    width: 100%;
    display: flex;
    position: relative;
`

const Left = styled.div`
    background-color: var(--dark);
    position: relative;
    flex: 1;

    main:nth-child(1) {
        position: absolute;
        animation-name: ${props => props.isLogin ? slotIn : slotOut};
        animation-duration: 0.9s;
        transform: ${props => props.isLogin ? `translateY(0%)` : `translateY(-100%)`};
    }

    section:nth-child(2) {
        position: absolute;
        animation-name: ${props => !props.isLogin ? slotIn : slotOut};
        animation-duration: 0.9s;
        transform: ${props => !props.isLogin ? `translateY(0%)` : `translateY(-100%)`};
    }
`

const Right = styled.div`
    background-color: var(--dark);
    position: relative;
    flex: 1;

    section:nth-child(1) {
        position: absolute;
        animation-name: ${props => props.isLogin ? slotIn : slotOut};
        animation-duration: 0.9s;
        transform: ${props => props.isLogin ? `translateY(0%)` : `translateY(-100%)`};
    }

    main:nth-child(2) {
        position: absolute;
        animation-name: ${props => !props.isLogin ? slotIn : slotOut};
        animation-duration: 0.9s;
        transform: ${props => !props.isLogin ? `translateY(0%)` : `translateY(-100%)`};
    }
`

export default function Login () {

    const [isLogin, setIsLogin] = useState(true)

    return (
        <Container>
            <Left isLogin={isLogin}>
                <LoginForm setIsLogin={setIsLogin} />
                <LoginBackground />
            </Left>
            <Right isLogin={isLogin}>
                <LoginBackground />
                <SignupForm setIsLogin={setIsLogin} />
            </Right>
        </Container>
    )
}