import pg from 'pg'

const config = {
  url: process.env.DATABASE_URL,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
}

export const pool = new pg.Pool(config)
