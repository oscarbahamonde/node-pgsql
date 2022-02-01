import { Pool } from 'pg';

const pool = new Pool({
    host: 'localhost',
    port: '5432',
    user: 'user',
    password: 'password',
    database: 'growby'
});

module.exports = pool;