import { Container, WaveBackground, Left, Right, Form, Click, Background, Paragraphs } from "./Signup&Login.style"
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import Wave from "../../Images/wave.png"
import { useNavigate } from "react-router-dom";

export default function ResetPassword ({ toLogin }) {
    const navigate = useNavigate()

    return (

        <Container className="mainHeight">

            <WaveBackground className="top" src={Wave} />
            <WaveBackground src={Wave} />

            <Left className="center">

                <Form action="#">
                    <h2>Resetar senha</h2>
                    <Input type="email" placeholder="E-mail" />
                    <Button bold={true}>ENVIAR</Button>
                    <span>Para fazer login <Click onClick={() => navigate("/login")}>clique aqui</Click></span>
                </Form>

            </Left>
            <Right>

                <Background className="center">
                    <h2 className="">OLÁ!</h2>
                    <Paragraphs className="paragraph-animation">
                        <FaQuoteLeft className="open quote" />
                        <FaQuoteRight className="close quote"  />
                        <p>Para alguém com viciado em jogos de azar, a sensação de jogar é a sua droga. A compulsão pelo jogo altera o humor e o estado de espírito do jogador. Assim como em outros vícios, o dependente desenvolve uma tolerância e vai precisando jogar cada vez mais para se satisfazer. Muito comum ver jogadores viciados perseguindo suas perdas, acreditando que se continuarem jogando vão recuperar o dinheiro perdido. Com a rotina de jogo, o hábito se cria e a vontade de jogar torna–se incontrolável.
                        E, como citado no início, a pessoa viciada será a última a perceber o problema.</p>
                    </Paragraphs>
                    <span>- Marcos, <span className="highlight">Gean</span></span>
                </Background>

            </Right>

        </Container>
    )
}