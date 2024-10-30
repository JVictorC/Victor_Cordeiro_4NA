import express from "express";
import productRoutes from "./routes/productsRoutes";
import transactionRoutes from "./routes/transactionsRoutes";
import authRouter from "./routes/authRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(productRoutes);
app.use(transactionRoutes);
app.use(authRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// "start": "npx ts-node src/migrations/migration.ts && npx ts-node src/server.ts"
