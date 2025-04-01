import styled, { keyframes } from "styled-components";
import LoginForm from "../Components/LoginPage/Forms/LoginForm";
import LoginBackground from "../Components/LoginPage/Backgrounds/LoginBackground";
import SignupForm from "../Components/LoginPage/Forms/SignupForm";
import ResetForm from "../Components/LoginPage/Forms/ResetForm";
import SignupBackground from "../Components/LoginPage/Backgrounds/SignupBackground";
import Background from "../Images/wave.png"

const slotIn = keyframes`
    0% {transform: translateY(-100%); opacity: 0%;}
    50% {opacity: 40%;}
    100% {transform: translateY(0%); opacity: 100%;}
`

const slotOut = keyframes`
    0% {transform: translateY(0%); opacity: 100%;}
    100% {transform: translateY(100%); opacity: 0%;}
`

const TextAnimation = keyframes`
    from {height: 0%;}
    to {height: 100%;}
`

const Container = styled.div`
    margin-top: var(--nav-height);
    height: var(--main-height);
    width: 100%;
    display: flex;
    overflow: hidden;
    position: relative;
`

const WaveBackground = styled.img`
    z-index: 1;
    min-width: 100%;
    height: 33%;
    bottom: -15%;
    position: absolute;
    pointer-events: none;
    opacity: 20%;
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

    @media (max-width: 1200px) {
        flex: 0;
    }
`

const FormContainer = styled.div`
    display: none;
    position: absolute;
    height: 100%;
    width: 100%;
    overflow-y: auto;

    &.in {
        display: inherit;
        animation-name: ${slotIn};
        animation-duration: 0.6s;
        transform: translateY(0);

        > * > * > p {
            animation-name: ${TextAnimation};
            animation-duration: 1.6s;
        }
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


    // Forms transition handler
    const formsHandler = (newForm) => {
        // Changes background only when switching between login & signup
        if (newForm === "signup") {
            document.querySelector(".background").classList.remove("in")
            document.querySelector(".background").classList.add("out")
        }
        if (newForm === "login" && currentForm === "signup") {
            document.querySelector(".background").classList.remove("out")
            document.querySelector(".background").classList.add("in")
        }
        // Clear animation className
        document.querySelectorAll(`.${oldForm}`).forEach(form => form.classList.remove("out"))
        document.querySelectorAll(`.${currentForm}`).forEach(form => form.classList.remove("in"))
        // Add animation className
        document.querySelectorAll(`.${currentForm}`).forEach(form => form.classList.add("out"))
        document.querySelectorAll(`.${newForm}`).forEach(form => form.classList.add("in"))
        // Update current forms
        oldForm = currentForm
        currentForm = newForm
    }

    return (
        <Container>

            <WaveBackground src={Background} />

            <Left>

                <FormContainer className="login in">
                    <LoginForm toSignup={() => formsHandler("signup")} toReset={() => formsHandler("reset")} />
                </FormContainer>

                <FormContainer className="reset">
                    <ResetForm toLogin={() => formsHandler("login")} />
                </FormContainer>

                <FormContainer className="signup">
                    <SignupForm toLogin={() => formsHandler("login")} />
                </FormContainer>
                
            </Left>

            <Right>

                <FormContainer className="background in">
                    <LoginBackground />
                </FormContainer>

                <FormContainer className="signup">
                    <SignupBackground />
                </FormContainer>

            </Right>

        </Container>
    )
}