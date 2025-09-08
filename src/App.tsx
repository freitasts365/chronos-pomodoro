import "./styles/theme.css";
import "./styles/global.css";
import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { Input } from "./components/Input";
import { Cycles } from "./components/Cycles";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className="form" action="">
          <div className="formRow">
            <Input
              id="task"
              type="text"
              labelText="Task"
              placeholder="type your task"
            />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow"></div>
          <Cycles />
          <div className="formRow">
            <button type="submit">Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
