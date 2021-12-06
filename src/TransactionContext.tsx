import { createContext, useEffect, useState } from "react";
import { api } from "./components/services/api";
import {
  Transaction,
  TransactionInput,
  TransactionProviderProps,
} from "./TransactionTypes";

// type TransactionInput = Omit<Transaction, "id" | "createdAt">;

interface TransactionContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // Setando em Transactions
  useEffect(() => {
    api
      .get("/transaction")
      .then((response) => setTransactions(response.data.transactions));
    console.log("Estado:", transactions);
  }, []);

  //Inserção de dados na API

  const createTransaction = async (transactionInput: TransactionInput) => {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  };

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}
