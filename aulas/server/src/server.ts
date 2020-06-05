import express from "express";

const app = express();

app.get("/users", (request, response) => {
  console.log("Listagem de Usuários");
  response.json([{ Hello: "WilliamA", William: "Robert" }]);
});

app.listen(3333);
