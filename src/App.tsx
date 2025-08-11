import "./styles/theme.css";
import "./styles/global.css";
import { Heading } from "./components/Heading";
import { TimerIcon } from "lucide-react";

export function App() {
  return (
    <div>
      <Heading>
        Ola Mundo
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>Your productivity companion.</p>
    </div>
  );
}
