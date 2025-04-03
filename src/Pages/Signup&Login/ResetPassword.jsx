import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

export default function ResetPassword ({ toLogin }) {
    return (
        <div>
            <div>
                <form action="#">
                    <h2>Resetar senha</h2>
                    <Input type="email" placeholder="E-mail" />
                    <Button bold={true}>ENTRAR</Button>
                    <span>Para fazer login <span onClick={toLogin}>clique aqui</span></span>
                </form>
            </div>
            <div>
                <div>
                    <h2 className="">OLÁ!</h2>
                    <div className="paragraph-animation">
                        <FaQuoteLeft className="open quote" />
                        <FaQuoteRight className="close quote"  />
                        <p>Para alguém com viciado em jogos de azar, a sensação de jogar é a sua droga. A compulsão pelo jogo altera o humor e o estado de espírito do jogador. Assim como em outros vícios, o dependente desenvolve uma tolerância e vai precisando jogar cada vez mais para se satisfazer. Muito comum ver jogadores viciados perseguindo suas perdas, acreditando que se continuarem jogando vão recuperar o dinheiro perdido. Com a rotina de jogo, o hábito se cria e a vontade de jogar torna–se incontrolável.
                        E, como citado no início, a pessoa viciada será a última a perceber o problema.</p>
                    </div>
                    <span>- Marcos, <span className="highlight">Gean</span></span>
                </div>
            </div>
        </div>
    )
}