import { Lembrete } from "./lembrete";
  
  interface LembretesListProps {
    lembretes: Lembrete[];
    onLembreteRemovido: (lembrete: Lembrete) => void;
  }
  
  const LembretesList: React.FC<LembretesListProps> = ({
    lembretes,
    onLembreteRemovido,
  }) => {
    // Função para agrupar lembretes por data
    const groupLembretesByDate = () => {
      const groupedLembretes: { [data: string]: Lembrete[] } = {};
  
      lembretes.forEach((lembrete) => {
        if (!groupedLembretes[lembrete.date]) {
          groupedLembretes[lembrete.date] = [];
        }
        groupedLembretes[lembrete.date].push(lembrete);
      });
  
      return groupedLembretes;
    };
  
    const groupedLembretes = groupLembretesByDate();
  
    return (
      <div>
        <h2>Lista de Lembretes</h2>
        {Object.keys(groupedLembretes).map((data) => (
          <div key={data}>
            <h3>Lembretes para {data}</h3>
            <ul>
              {groupedLembretes[data].map((lembrete, index) => (
                <li key={index}>
                  {lembrete.name}
                  <button
                    onClick={() => onLembreteRemovido(lembrete)}
                  >
                    Remover
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };
  
  export default LembretesList;
  