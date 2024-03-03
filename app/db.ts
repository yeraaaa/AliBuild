import { createPool, Pool } from 'mysql2/promise';

const pool: Pool = createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'alibuild',
  connectionLimit: 10,
});

export default pool;