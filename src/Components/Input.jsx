import styled from "styled-components";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useState } from "react";

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
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    &.error {
        box-shadow: inset 0 0 3px 0 red;
    }

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
    background: linear-gradient(90deg, var(--main-theme) 0%, var(--main-theme-two) 100%);
    transition: width 0.3s cubic-bezier(0.42, 0, 0.58, 1.00);
    opacity: 80%;
`

const Occult = styled.div`
    position: absolute;
    right: 5%;
    top: 25%;
    font-size: 1.5rem;
    opacity: 50%;
    cursor: pointer;

    &:hover {
        opacity: 80%;
    }
`

export default function Input ({
    onChange,
    name,
    required,
    type,
    placeholder,
    width,
    password,
    error
}) {

    const [showPassword, setUsePassword] = useState(false)

    return (
        <Teste>
            <Container
                className={error === "true" ? "error" : ""}
                onChange={onChange}
                name={name}
                required={required}
                type={showPassword ? "text" : type}
                placeholder={placeholder}
                width={width} />
            <Span className="input-border"></Span>
            {password ? (
                <Occult onClick={() => setUsePassword(!showPassword)}>
                    {showPassword ? (
                        <IoMdEye />
                    ):(
                        <IoMdEyeOff />
                    )}
                </Occult>
            ) : null}
        </Teste>
    )
}