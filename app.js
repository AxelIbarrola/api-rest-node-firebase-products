import express from "express";
import productsRouter from "./src/routes/products.router.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Servidor funcionando correctamente",
  });
});

app.use("/api/products", productsRouter);

app.use((req, res) => {
  res.status(404).json({ error: "Página no encontrada." });
});

export default app;
