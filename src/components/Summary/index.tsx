import { Container } from "./styled";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import total from "../../assets/total.svg";

export function Summary() {
  return (
    <Container>
      <div>
        <header className="title--icon">
          <p>
            Entradas
            <img src={incomeImg} alt="" />
          </p>
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div>
        <header className="title--icon">
          <p>
            Saída
            <img src={outcomeImg} alt="" />
          </p>
        </header>
        <strong>R$ -500,00</strong>
      </div>
      <div className="hightlights-background">
        <header className="title--icon">
          <p>
            Total:
            <img src={total} alt="" />
          </p>
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  );
}
