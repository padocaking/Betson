import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    display: flex;
    overflow: hidden;
    position: relative;
    //background-image: linear-gradient(to right, var(--dark), black);
`

export const TopWaveBackground = styled.img`
    z-index: 1;
    min-width: 100%;
    height: 33%;
    top: -12.5%;
    position: absolute;
    pointer-events: none;
    opacity: 20%;
    overflow: hidden;
    transform: scale(-1, -1);
`

export const WaveBackground = styled.img`
    z-index: 1;
    min-width: 100%;
    height: 33%;
    bottom: -15%;
    position: absolute;
    pointer-events: none;
    opacity: 12.5%;
    overflow: hidden;

    &.top {
        transform: scale(-1, -1);
        top: -15%;
        bottom: auto;
    }
`

export const Left = styled.main`
    flex: 1;
    background-color: var(--dark);
`

export const Right = styled.section`
    flex: 1;
    background-color: var(--dark-two);

    @media (max-width: 1000px) {
        display: none;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 60%;
    padding: 20px 0px;
    z-index: 0;
    
    @media (max-width: 1000px) {
        width: 80%;
    }

    h2 {
        font-size: var(--main-subtitle-font);
        text-align: center;
    }

    .errorMessage {
        color:rgba(255, 0, 0, 0.66);
        margin-top: -20px;
        margin-left: 5px;
        align-self: flex-start;
        font-size: var(--main-min-font);
        opacity: 0%;
        height: 0px;
    }

    .opened {
        opacity: 100%;
        height: 10px;
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

    .fullname {
        display: flex;
        gap: 4%;
        width: 100%;
    }
`

export const Click = styled.span`
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

const TitleAnimation = keyframes`
    from {opacity: 0%;}
    to {opacity: 100%;}
`

export const Background = styled.section`
    flex-direction: column;
    gap: 3%;
    height: 100%;

    h2 {
        font-size: var(--main-title-font);
        font-weight: 800;
        letter-spacing: 0.5rem;
        animation-name: ${TitleAnimation};
        animation-duration: 0.5s;
        animation-timing-function: linear;

        &.multiline {
            line-height: 110%;
            max-width: 50%;
            text-align: center;
        }
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
    from {max-height: 0px;}
    to {max-height: 100%;}
`

export const Paragraphs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    position: relative;
    max-width: 70%;
    animation-name: ${TextAnimation};
    animation-duration: 2s;
    
    p {
        font-size: var(--main-max-font);
        stroke-width: 20px;
        letter-spacing: 2px;
        font-weight: 300;
        font-style: italic;
        text-align: center;
        overflow: hidden;
        animation-name: ${TextAnimation};
        animation-duration: 1s;
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