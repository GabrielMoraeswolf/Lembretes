
import { useState } from "react";
import { Lembrete } from "./lembrete";


interface LembretesFormProps {
  onLembreteCriado: (lembrete: Lembrete) => void;
}

const LembretesForm: React.FC<LembretesFormProps> = ({ onLembreteCriado }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [erro, setErro] = useState("");

  const criarLembrete = () => {
    if (!name || !date) {
      setErro("Por favor, preencha todos os campos corretamente.");
    } else {
      onLembreteCriado({ name, date });
      setName("");
      setDate("");
      setErro("");
    }
  };

  return (
    <div>
      <h2>Criar Lembrete</h2>
      <div>
        <label>Nome</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Data (dd/mm/yy)</label>
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button onClick={criarLembrete}>Criar</button>
      {erro && <div>{erro}</div>}
    </div>
  );
};

export default LembretesForm;
