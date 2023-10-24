import { useState } from "react";
import Head from "next/head";
import LembretesForm from "./components/lembretsForm";
import LembretesList from "./components/lembretsList";

const Home: React.FC = () => {
  const [lembretes, setLembretes] = useState<{ name: string; date: string }[]>([]);

  const handleLembreteCriado = (lembrete: { name: string, date: string }) => {
    setLembretes([...lembretes, lembrete]);
  };

  const handleLembreteRemovido = (lembrete: { name: string, date: string }) => {
    const filteredLembretes = lembretes.filter((l) => l.name !== lembrete.name && l.date !== lembrete.date);
    setLembretes(filteredLembretes);
  };
  

  return (
    <div>
      <Head>
        <title>Criador de Lembretes</title>
      </Head>

      <main>
        <h1>Criador de Lembretes</h1>
        <LembretesForm onLembreteCriado={handleLembreteCriado} />
        <LembretesList
          lembretes={lembretes.map(({ name, date }) => ({ name, date }))}
          onLembreteRemovido={handleLembreteRemovido}
        />

      </main>
    </div>
  );
};

export default Home;
