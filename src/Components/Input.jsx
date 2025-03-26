import styled from "styled-components";

const Container = styled.input`
    background-color: var(--lighter-dark);
    border: none;
    padding: 15px;
    border-radius: 5px;
    font-size: var(--main-med-font);
    width: ${props => props.width === undefined ? "auto" : props.width};
`

export default function Input ({ type, placeholder, width }) {
    return (
        <Container type={type} placeholder={placeholder} width={width} />
    )
}