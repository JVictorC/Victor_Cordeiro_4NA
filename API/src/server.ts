import express from "express";
import userRoutes from "./routes/userRoutes";
import productRoutes from "./routes/productsRoutes";
import transactionRoutes from "./routes/transactionsRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(userRoutes);
app.use(productRoutes);
app.use(transactionRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
