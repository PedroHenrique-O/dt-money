import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { TransactionTable } from "./components/TransactionTable";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Summary />
      <TransactionTable />
      <GlobalStyle />
    </>
  );
}
