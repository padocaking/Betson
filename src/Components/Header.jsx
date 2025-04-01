import styled from "styled-components";

const Container = styled.header`
    width: 100%;
    top: 0;
    height: var(--nav-height);
    border-bottom: 1px solid gray;
    position: fixed;
    z-index: 1;
`

export default function Header () {
    return (
        <Container>
            HEADER
        </Container>
    )
}