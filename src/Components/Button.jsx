import styled, { keyframes } from "styled-components";

const hover = keyframes`
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
`

const Container = styled.button`
    height: 54px;
    background-color: var(--dark);
    color: var(--light);
    border: none;
    padding: 15px;
    border-radius: 1000px;
    cursor: pointer;
    width: ${props => props.width === undefined ? "auto" : props.width};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--main-med-font);
    font-weight: ${props => props.bold ? "700" : "300"};
    z-index: ${props => props.styled ? "auto" : "1"};

    &:after {
        content: '';
        position: absolute;
        inset: 0;
        margin: -0.15rem;
        border-radius: 1000px;
        background-image: linear-gradient(to right, var(--main-theme-two), var(--main-theme), var(--main-theme-two));
        background-size: 400%;
        z-index: -1;
    }

    &:hover {
        &:after {
            background-color: rgba(125, 125, 125, 0.15);
            background-blend-mode: lighten;
            animation: ${hover} 8s linear infinite;
        }
    }
`

export default function Button ({ children, styled, width, bold }) {
    return (
        <Container styled={styled} width={width} bold={bold}>
            {children}
        </Container>
    )
}