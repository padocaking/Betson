import { Container, WaveBackground, Left, Right, Form, Click, Background, Paragraphs } from "./Signup&Login.style"
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import Wave from "../../Images/wave.png"
import { useNavigate } from "react-router-dom";

export default function Signup () {

    const navigate = useNavigate()

    return (
        <Container className="mainHeight">

            <WaveBackground className="top" src={Wave} />
            <WaveBackground src={Wave} alt="Wave" />

            <Left className="center">

                <Form action="#">

                    <h2>Bem-vindo!</h2>
                    <div className="fullname">
                        <Input type="text" placeholder="Nome" />
                        <Input type="text" placeholder="Sobrenome" />
                    </div>
                    <Input type="email" placeholder="E-mail" />
                    <Input type="password" placeholder="Senha" password={true} />
                    <Input type="password" placeholder="Confirmar senha" password={true} />
                    <Button bold={true}>REGISTRAR-SE</Button>
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