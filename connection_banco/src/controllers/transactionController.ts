import { TransactionRepository } from "../repository/transactionRepository";
import { Request, Response } from "express";

const transacitonRepository = new TransactionRepository();

export const getTransactions = async (req: Request, res: Response) => {
  try {
    console.log("teste");

    const transacitons = await transacitonRepository.getAllTransactions();
    res.status(200).json(transacitons);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar tranasctions" });
  }
};

export const addTransaction = async (req: Request, res: Response) => {
  const { idUser, idProduto } = req.body;

  try {
    const transaction = await transacitonRepository.addTransaction(
      idUser,
      idProduto,
    );
    res.status(201).json(transaction);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao adicionar transaction" });
  }
};
