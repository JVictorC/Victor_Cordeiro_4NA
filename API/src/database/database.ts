import { Pool } from "pg";

// Substitua pela sua string de conexão do Render.com
const connectionString =
  "postgresql://aulaterca_user:Ss3OAnQcZX9M20YjpGDtClYms462YrCW@dpg-csh979rv2p9s738qmmig-a.oregon-postgres.render.com/aulaterca";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  },
});

export default pool;
