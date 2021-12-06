import Modal from "react-modal";
import { Container, RadioBox, TransactionContainer } from "./styled";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { FormEvent, useState } from "react";

import { useContext } from "react";
import { TransactionContext } from "../../TransactionContext";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionContext);

  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  const handleCreateNewTransaction = async (e: FormEvent) => {
    e.preventDefault();

    await createTransaction({
      type,
      title,
      amount,
      category,
    });

    onRequestClose();
    setType("");
    setTitle("");
    setAmount(0);
    setCategory("");
  };

  const handleDepositButton = (e: FormEvent) => {
    e.preventDefault();
    setType("deposit");
  };

  const handleWithDrawtButton = (e: FormEvent) => {
    e.preventDefault();
    setType("withdraw");
  };

  return (
    <Modal
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <button
        onClick={onRequestClose}
        type="button"
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título"
        />
        <input
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Valor"
          type="number"
        />
        <input
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <TransactionContainer>
          <RadioBox
            isActive={type === "deposit"}
            isActiveColor="green"
            type="submit"
            onClick={handleDepositButton}
          >
            <img src={incomeImg} alt="Entrada" />
            Entrada
          </RadioBox>
          <RadioBox
            isActive={type === "withdraw"}
            isActiveColor="red"
            type="submit"
            onClick={handleWithDrawtButton}
          >
            <img src={outcomeImg} alt="Saída" />
            Saída
          </RadioBox>
        </TransactionContainer>
        <button className="submit-btn"> Cadastrar </button>
      </Container>
    </Modal>
  );
}
