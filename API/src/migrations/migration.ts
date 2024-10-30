import pool from "../database/database";

const createUsersTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL
      );
    `;
    await client.query(queryText);
    console.log('Tabela "users" criada com sucesso!');
  } catch (err) {
    console.error("Erro ao criar tabela:", err);
  } finally {
    client.release();
  }
};

const createProductsTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
       CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        price DECIMAL(20, 3) UNIQUE NOT NULL
      );
    `;
    await client.query(queryText);
    console.log('Tabela "Products" criada com sucesso!');
  } catch (err) {
    console.error("Erro ao criar tabela:", err);
  } finally {
    client.release();
  }
};

const createTransactionTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
       CREATE TABLE IF NOT EXISTS transactions (
        id SERIAL PRIMARY KEY,
        idProduct INTEGER NOT NULL,
        idUser INTEGER NOT NULL,
        
        FOREIGN KEY (idUser) REFERENCES users(id),

        FOREIGN KEY (idProduct) REFERENCES products(id)
      );
    `;
    await client.query(queryText);
    console.log('Tabela "Transaction" criada com sucesso!');
  } catch (err) {
    console.error("Erro ao criar tabela:", err);
  } finally {
    client.release();
  }
};

const alterTableUSer = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
        ALTER TABLE users
        ADD passwordHash VARCHAR(500) NOT NULL;
    `;
    await client.query(queryText);
    console.log('Tabela "users" atualizada com successo!');
  } catch (err) {
    console.error("Erro ao criar tabela:", err);
  } finally {
    client.release();
  }
};

const start = async () => {
  await createUsersTable();
  await createProductsTable();
  await createTransactionTable();

  await alterTableUSer();
};

start().then(() => process.exit(0));

// DROP TABLE transactions;
// DROp TABLE products;
// DROp TABLE users;
