import styled from "styled-components";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useState } from "react";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Underline = styled.div`
    position: relative;
    width: 100%;
`

const InputContainer = styled.input`
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
        box-shadow: inset 0 0 2px 0 #ff0000d1;
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

const InputError = styled.span`
    color:rgba(255, 0, 0, 0.66);
    margin-left: 6px;
    align-self: flex-start;
    opacity: 0%;
    height: 0px;

    &.error {
        opacity: 100%;
        height: 10px;
        font-size: var(--main-min-font);
    }
`

export default function Input ({
    name,
    required,
    type,
    placeholder,
    width,
    password,
    error,
    errorMsg,
    useForm
}) {

    const [showPassword, setUsePassword] = useState(false)

    return (
        
        <Container>
            <Underline>
                <InputContainer
                    className={error === "true" ? "error" : ""}
                    name={name}
                    required={required}
                    type={showPassword ? "text" : type}
                    placeholder={placeholder}
                    width={width}
                    {...useForm}
                />
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
            </Underline>
            <InputError className={error === "true" ? "error" : ""}>
                {errorMsg}
            </InputError>
        </Container>
    )
}