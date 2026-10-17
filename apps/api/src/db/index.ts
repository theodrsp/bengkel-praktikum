import { Pool, PoolConfig } from 'pg';

import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is missing.');
}

// Konfigurasi Pool untuk Neon PostgreSQL
const poolConfig: PoolConfig = {
  connectionString,
  ssl: {
    // Diperlukan untuk koneksi aman ke Neon cloud
    rejectUnauthorized: false,
  },
  // Batas pool per instans
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
};

export const pool = new Pool(poolConfig);

// Helper query dengan log performa sederhana
export const query = (text: string, params?: unknown[]) => {
  return pool.query(text, params);
};

// Fungsi verifikasi koneksi saat inisialisasi
export async function testConnection(): Promise<void> {
  const client = await pool.connect();
  try {
    const res = await client.query('SELECT NOW() AS current_time');
    console.log('✅ Terhubung ke Neon PostgreSQL (Pooled):', res.rows[0].current_time);
  } finally {
    client.release();
  }
}