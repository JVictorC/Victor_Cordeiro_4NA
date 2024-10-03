import { Pool } from "pg";

// Substitua pela sua string de conexão do Render.com
const connectionString =
  "postgresql://jvictorc_adsna4_user:EcyXxUFC0KTebyAQNkLSWDVqUX1hgwrR@dpg-crcepbjtq21c73d6qhng-a.oregon-postgres.render.com/jvictorc_adsna4";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  },
});

export default pool;
