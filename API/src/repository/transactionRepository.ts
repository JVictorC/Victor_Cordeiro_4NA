import { Pool } from "pg";
import pool from "../database/database";
import ITransaction from "../models/transactionModel";

export class TransactionRepository {
  private pool: Pool;

  constructor() {
    this.pool = pool;
  }

  // Método para buscar todos os usuários
  async getAllTransactions(): Promise<ITransaction[]> {
    const { rows } = await this.pool.query(
      "SELECT id, idProduto, idUser FROM transactions",
    );

    return rows;
  }

  // Método para adicionar um novo usuário
  async addTransaction(
    idUser: number,
    idProduto: number,
  ): Promise<ITransaction> {
    const queryText =
      "INSERT INTO transactions(idUser, idProduct) VALUES($1, $2) RETURNING *";
    const { rows } = await this.pool.query(queryText, [idUser, idProduto]);
    return rows[0];
  }
}
