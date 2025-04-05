import { Container, WaveBackground, Left, Right, Form, Click, Background, Paragraphs } from "./Signup&Login.style"
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { FcGoogle } from "react-icons/fc";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import Wave from "../../Images/wave.png"
import { useNavigate } from "react-router-dom";
import useForm from "../../Hooks/useForm";

export default function Login () {
    
    const { form, onChangeForm } = useForm()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
    }

    let navigate = useNavigate();

    return (
        <Container className="mainHeight">

            <WaveBackground className="top" src={Wave} />
            <WaveBackground src={Wave} />

            <Left className="center">

                <Form onSubmit={(e) => handleSubmit(e)}>

                    <h2>Entrar</h2>
                    <Input
                        error="false"
                        type="email"
                        placeholder="E-mail"
                        name="email"
                        required
                        onChange={(e) => onChangeForm(e)} />
                    <Input
                        error="false"
                        type="password"
                        placeholder="Senha"
                        password={true}
                        name="password"
                        required
                        onChange={(e) => onChangeForm(e)} />
                    <Click onClick={() => navigate("/reset")}>Esqueci a minha senha</Click>
                    <Button type="submit" bold="true">ENTRAR</Button>
                    <Button styled="true"><FcGoogle className="icon" />Entrar com conta Google</Button>
                    <span>Não possui uma conta? <Click onClick={() => navigate("/signup")}>Clique aqui</Click></span>

                </Form>

            </Left>

            <Right className="center">

                <Background className="center">

                    <h2 className="">OLÁ!</h2>
                    <Paragraphs className="paragraph-animation">
                        <FaQuoteLeft className="open quote" />
                        <FaQuoteRight className="close quote"  />
                        <p>Para alguém com vício em jogos de azar, a sensação de jogar é a sua droga. A compulsão pelo jogo altera o humor e o estado de espírito do jogador. Assim como em outros vícios, o dependente desenvolve uma tolerância e vai precisando jogar cada vez mais para se satisfazer. Muito comum ver jogadores viciados perseguindo suas perdas, acreditando que se continuarem jogando vão recuperar o dinheiro perdido. Com a rotina de jogo, o hábito se cria e a vontade de jogar torna–se incontrolável.
                        E, como citado no início, a pessoa viciada será a última a perceber o problema.</p>
                    </Paragraphs>
                    <span>- Marcos, <span className="highlight">Gean</span></span>
                    
                </Background>

            </Right>

        </Container>
    )
}