import { Mail, Lock } from "lucide-react";

function App() {
  return (
    <div className="form">
      <div className="formRow">

        <h1>Login</h1>

        <div className="defaultInput">
          <Mail />
          <input type="email" placeholder="Digite seu email" />
        </div>

        <div className="defaultInput">
          <Lock />
          <input type="password" placeholder="Digite sua senha" />
        </div>

        <button className="defaultButton">
          Entrar
        </button>

      </div>
    </div>
  );
}

export default App;