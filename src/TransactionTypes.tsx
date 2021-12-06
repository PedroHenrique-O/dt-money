import { ReactNode } from "react";

export interface Transaction {
  id: number;
  title: string;
  amount: number;
  category: string;
  createdAt: string;
  type: string;
}
export interface TransactionProviderProps {
  children: ReactNode;
}
export interface TransactionInput {
  type: string;
  title: string;
  amount: number;
  category: string;
}
