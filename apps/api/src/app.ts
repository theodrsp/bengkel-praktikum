import cors from 'cors';
import express from 'express';
import { pool } from './db';

const app = express();

// middleware dasar
app.use(cors());
app.use(express.json());

// Tambahkan rute health check database
app.get('/api/health', async (req, res) => {
  try {
    const result = await pool.query('SELECT 1 as healthy');
    const isDBConnected = result.rows[0]?.healthy === 1;

    res.status(200).json({
      status: 'ok',
      database: isDBConnected ? 'connected' : 'unknown',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    res.status(200).json({
      status: 'ok',
      database: 'disconnected',
      message: (error as Error).message,
      timestamp: new Date().toISOString(),
    });
  }
});

export default app;
