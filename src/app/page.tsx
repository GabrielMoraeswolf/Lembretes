"use client";
import React, { useState } from 'react';
import LembretesForm from "./components/lembretsForm";
import LembretesList from "./components/lembretsList";
import styles from './page.module.css';

const Home: React.FC = () => {
  const [lembretes, setLembretes] = useState<{ name: string; date: string }[]>([]);

  const handleLembreteCriado = (lembrete: { name: string, date: string }) => {
    setLembretes([...lembretes, lembrete]);
  };
  const handleLembreteRemovido = (lembrete: { name: string, date: string }) => {
    const filteredLembretes = lembretes.filter((l) => l.name !== lembrete.name || l.date !== lembrete.date);
    setLembretes(filteredLembretes);
  };
  return (
      <main >
        <div className={styles.container}> 
          <LembretesForm _LembreteCriado={handleLembreteCriado} />
          <LembretesList
            lembretes={lembretes.map(({ name, date }) => ({ name, date }))}
            onLembreteRemovido={handleLembreteRemovido}
          />
        </div>
      </main>
  );
};
export default Home;