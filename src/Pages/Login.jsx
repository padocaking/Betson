import styled, { keyframes } from "styled-components";
import LoginForm from "../Components/LoginPage/LoginForm";
import LoginBackground from "../Components/LoginPage/LoginBackground";
import SignupForm from "../Components/LoginPage/SignupForm";
import { useState } from "react";
import ResetForm from "../Components/LoginPage/ResetForm";

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
`

const Right = styled.div`
    background-color: var(--dark);
    position: relative;
    flex: 1;
`

const FormContainer = styled.div`
    display: none;
    position: absolute;
    height: 100%;
    width: 100%;

    &.in {
        display: inherit;
        animation-name: ${slotIn};
        animation-duration: 0.6s;
        transform: translateY(0);
    }

    &.out {
        display: inherit;
        animation-name: ${slotOut};
        animation-duration: 0.6s;
        transform: translateY(-100%);
    }
`

export default function Login () {

    let oldForm = "signup"
    let currentForm = "login"

    const formsHandler = (newForm) => {
        document.querySelectorAll(`.${oldForm}`).forEach(form => form.classList.remove("out"))
        document.querySelectorAll(`.${currentForm}`).forEach(form => form.classList.remove("in"))

        document.querySelectorAll(`.${currentForm}`).forEach(form => form.classList.add("out"))
        document.querySelectorAll(`.${newForm}`).forEach(form => form.classList.add("in"))
        
        oldForm = currentForm
        currentForm = newForm
    }

    return (
        <Container>
            <Left>
                <FormContainer className="login in">
                    <LoginForm toSignup={() => formsHandler("signup")} toReset={() => formsHandler("reset")} />
                </FormContainer>
                <FormContainer className="signup">
                    <LoginBackground />
                </FormContainer>
                <FormContainer className="reset">
                    <ResetForm toLogin={() => formsHandler("login")} />
                </FormContainer>
            </Left>
            <Right>
                <FormContainer className="login in">
                    <LoginBackground />
                </FormContainer>
                <FormContainer className="signup">
                    <SignupForm toLogin={() => formsHandler("login")} />
                </FormContainer>
                <FormContainer className="reset">
                    <LoginBackground />
                </FormContainer>
            </Right>
        </Container>
    )
}