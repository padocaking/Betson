import styled from "styled-components";

const Container = styled.button`
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
    z-index: ${props => props.styled ? "auto" : "1"};
    font-size: 0.9rem;
    font-weight: ${props => props.bold ? "700" : "300"};

    &:after {
        content: '';
        position: absolute;
        inset: 0;
        margin: -0.15rem;
        border-radius: 1000px;
        background-image: linear-gradient(to right, var(--main-theme), var(--main-theme-two));
        z-index: -1;
    }
`

export default function Button ({ children, styled, width, bold }) {
    return (
        <Container styled={styled} width={width} bold={bold}>
            {children}
        </Container>
    )
}