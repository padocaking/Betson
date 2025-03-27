import styled from "styled-components";

const Teste = styled.div`
    position: relative;
    width: 100%;
`

const Container = styled.input`
    background-color: var(--lighter-dark);
    border: none;
    padding: 15px;
    border-radius: 5px;
    font-size: var(--main-med-font);
    width: ${props => props.width === undefined ? "auto" : props.width};
    font-size: var(--main-max-font);
    position: relative;
    //box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    &:focus {
        background-color: var(--lighter-dark-two);
        outline: none;
        width: 100%;
    }

    &:focus + .input-border {
        width: 100%;
    }
`

const Span = styled.span`
    position: absolute;
    width: 0%;
    bottom: 0;
    left: 0;
    height: 2px;
    background: linear-gradient(90deg, #FF6464 0%, #FFBF59 50%, #47C9FF 100%);
    transition: width 0.3s cubic-bezier(0.42, 0, 0.58, 1.00);
`

export default function Input ({ type, placeholder, width }) {
    return (
        <Teste>
            <Container type={type} placeholder={placeholder} width={width} />
            <Span className="input-border"></Span>
        </Teste>
    )
}