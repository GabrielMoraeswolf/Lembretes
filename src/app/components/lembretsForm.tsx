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
    const dataAtual = new Date();
    if (!name || !date) {//campos não vazios 
      setErro("Por favor, preencha todos os campos corretamente.");
    } else {
      const datePattern = /^(\d{2})\/(\d{2})\/(\d{4})$/;//formatação adequada 
      if (!date.match(datePattern)) {
        setErro("Formato de data inválido. Use dd/mm/yyyy.");
        return;
      }
      const dataString = date;
      const partes = dataString.split("/"); // Divida a string em partes
      const dia = parseInt(partes[0], 10); 
      const mes = parseInt(partes[1], 10); 
      const ano = parseInt(partes[2], 10);
      const dataInserida = new Date(ano, mes, dia);
      
      if(dia>=1 && dia<=31 && mes>=1 && mes<=12 ){//verificação de data  
        if (dataInserida > dataAtual) {// A data inserida está no futuro
          onLembreteCriado({ name: name, date: date });
          setName("");
          setDate("");
          setErro("");
        } else {
          setErro("ERROR! É necessário preencher com uma data posterior a data atual.");
          return;
        }
      }
      else{
        setErro("Formato de data inválido. Use dd/mm/yyyy.");
        return;
      }
    }
  };
  return (
    <div className={styles['new-lembrete-container']}>
      <h2 className={styles['labelTitule']}>&nbsp; Novo Lembrete</h2>
      <div className={styles.label}>
        <label className={styles.labelNome}>Nome </label>
        <input
          type="text"
          value={name}
          placeholder=" Nome do lembrete"
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />
      </div>
      <div className={styles.label}>
        <label className={styles.labelNome}>Data </label>
        <input
          type="text"
          value={date}
          placeholder="Data do lembrete"
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