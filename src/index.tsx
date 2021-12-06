import { createServer, Model } from "miragejs";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelance de website",
          type: "deposit",
          category: "dev",
          amount: 2000,
          createdAt: new Date("2021-02-12 09:00:30"),
        },
        {
          id: 2,
          title: "Jantar",
          type: "withdraw",
          category: "Comida",
          amount: 500,
          createdAt: new Date("2021-02-12 10:00:30"),
        },
        {
          id: 3,
          title: "Filme",
          type: "withdraw",
          category: "Laser",
          amount: 100,
          createdAt: new Date("2021-02-12 04:00:30"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transaction", (schema) => {
      return schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      let data = JSON.parse(request.requestBody);
      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
