"use client";
import React, { useState } from 'react';
import { Lembrete } from "./lembrete";
import styles from './LembretesForm.module.css';

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
    <div >
      <h2>Criar Lembrete</h2>
      <div className={styles.label}>
        <label className={styles.labelNome}>Nome </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />
      </div>
      <div className={styles.label}>
        <label className={styles.labelNome}>Data </label>
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={styles.input}
        />
      </div>
      <button onClick={criarLembrete} className={styles.button}>
        Criar
      </button>
      {erro && <div className={styles['error-message']}>{erro}</div>}
    </div>
  );
};
export default LembretesForm;