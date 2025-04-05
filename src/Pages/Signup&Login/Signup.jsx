import { Container, WaveBackground, Left, Right, Form, Click, Background, Paragraphs } from "./Signup&Login.style"
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import Wave from "../../Images/wave.png"
import { useNavigate } from "react-router-dom";
import useForm from "../../Hooks/useForm";

export default function Signup () {
    
    const { form, onChangeForm } = useForm()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
    }

    let navigate = useNavigate();

    return (
        <Container className="mainHeight">

            <WaveBackground className="top" src={Wave} />
            <WaveBackground src={Wave} alt="Wave" />

            <Left className="center">

                <Form onSubmit={(e) => handleSubmit(e)}>

                    <h2>Bem-vindo!</h2>
                    <div className="fullname">
                        <Input
                        error="false"
                            name="name"
                            type="text"
                            required
                            onChange={(e) => onChangeForm(e)}
                            placeholder="Nome" />
                        <Input
                        error="false"
                            name="surname"
                            type="text"
                            required
                            onChange={(e) => onChangeForm(e)}
                            placeholder="Sobrenome" />
                    </div>
                    <Input
                        error="false"
                        name="email"
                        type="email"
                        required
                        onChange={(e) => onChangeForm(e)}
                        placeholder="E-mail" />
                    <Input
                        error="false"
                        name="password"
                        type="password"
                        placeholder="Senha"
                        required
                        onChange={(e) => onChangeForm(e)}
                        password={true} />
                    <Input
                        error="false"
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirmar senha"
                        required
                        onChange={(e) => onChangeForm(e)}
                        password={true} />
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