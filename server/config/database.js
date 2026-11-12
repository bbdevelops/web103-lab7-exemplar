import pg from 'pg'
import './dotenv.js'

const config = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE
}

// Hosted databases (e.g. Render) require SSL/TLS; local ones usually don't
const isLocal = ['localhost', '127.0.0.1', undefined, ''].includes(process.env.PGHOST)
if (!isLocal) {
    config.ssl = { rejectUnauthorized: false }
}

export const pool = new pg.Pool(config)
