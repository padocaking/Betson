import { Container, WaveBackground, Left, Right, Form, Click, Background, Paragraphs } from "./Signup&Login.style"
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import Wave from "../../Images/wave.png";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Signup () {
    
    const schema = Yup.object().shape({
        name: Yup
            .string()
            .required("Nome é obrigatório"),
        surname: Yup
            .string()
            .required("Sobrenome é obrigatório"),
        email: Yup
            .string()
            .required("E-mail é obrigatório")
            .email("E-mail inválido"),
        password: Yup
            .string()
            .required("Senha é obrigatório")
            .min(8, "Senha deve ter no mínimo 8 caracteres")
            .matches(/[a-zA-Z]/, "Senha deve conter pelo menos uma letra")
            .matches(/\d/, "Senha deve conter pelo menos um número"),
        confirmPassword: Yup
            .string()
            .required("Necessário confirmar senha")
            .oneOf([Yup.ref("password"), null], "As senhas devem ser iguais")
    })

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    let navigate = useNavigate();

    return (
        <Container className="mainHeight">

            <WaveBackground className="top" src={Wave} />
            <WaveBackground src={Wave} alt="Wave" />

            <Left className="center">

                <Form onSubmit={handleSubmit(onSubmit)}>

                    <h2>Bem-vindo!</h2>

                    <div className="fullname">
                        <Input
                            error={errors.name?.message === undefined ? "false" : "true"}
                            errorMsg={errors.name?.message}
                            type="text"
                            placeholder="Nome"
                            useForm={{...register("name")}}
                        />
                        <Input
                            error={errors.surname?.message === undefined ? "false" : "true"}
                            errorMsg={errors.surname?.message}
                            type="text"
                            placeholder="Sobrenome"
                            useForm={{...register("surname")}}
                        />
                    </div>

                    <Input
                        error={errors.email?.message === undefined ? "false" : "true"}
                        errorMsg={errors.email?.message}
                        type="email"
                        placeholder="E-mail"
                        useForm={{...register("email")}}
                    />
                    <Input
                        error={errors.password?.message === undefined ? "false" : "true"}
                        errorMsg={errors.password?.message}
                        type="password"
                        placeholder="Senha"
                        useForm={{...register("password")}}
                        password
                    />
                    <Input
                        error={errors.confirmPassword?.message === undefined ? "false" : "true"}
                        errorMsg={errors.confirmPassword?.message}
                        type="password"
                        placeholder="Confirmar senha"
                        useForm={{...register("confirmPassword")}}
                        password
                    />
                    
                    <Button type="submit" bold="true">REGISTRAR-SE</Button>
                    <span>Já possui uma conta? <Click onClick={() => navigate("/login")}>Clique aqui</Click></span>

                </Form>

            </Left>

            <Right className="center">

                <Background className="center">

                    <h2 className="multiline">MUDE SUA VIDA!</h2>
                    <Paragraphs>
                        <FaQuoteLeft className="open quote" />
                        <FaQuoteRight className="close quote"  />
                        <p>Gerson era apenas um viciado em apostas, que lhe causava
                            problemas familiares, profissionais e psicológicas, porém
                            tudo mudou quando Gerson usou todos fundos de sua família
                            e colocou no verde. Agora Gerson dedica sua vida para mudar
                            a vida de pessoas através das apostas. Junte a Gerson e se
                            torne um <span className="highlight">VENCEDOR</span>!
                        </p>
                    </Paragraphs>

                </Background>

            </Right>

        </Container>
    )
}