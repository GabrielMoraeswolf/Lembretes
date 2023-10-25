"use client";
import { Lembrete } from "./lembrete";
import styles from './LembretesList.module.css';

  interface LembretesListProps {
    lembretes: Lembrete[];
    onLembreteRemovido: (lembrete: Lembrete) => void;
  }
  const LembretesList: React.FC<LembretesListProps> = ({
    lembretes,
    onLembreteRemovido,
  }) => {
    // Função para classificar os lembretes por data
  const sortLembretesByDate = (lembretes: Lembrete[]) => {
    return lembretes.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateA - dateB;
    });
  };
  const sortedLembretes = sortLembretesByDate(lembretes);

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
      <div className={styles['list-title-container']}>
        <div className={styles['list-container']}>
          <h2 className={styles['list-header']}>Lista de Lembretes</h2>
          {Object.keys(groupedLembretes).map((data) => (
            <div key={data} className={styles['date-box']}>
              <h3 className={styles['date-header']}>{data}</h3>
              <ul>
                {groupedLembretes[data].map((lembrete) => (
                  <li key={lembrete.name} className={styles.item}>
                    {lembrete.name}
                    <button
                      onClick={() => onLembreteRemovido(lembrete)}
                      className={styles['remove-button']}
                    >
                      X
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default LembretesList;