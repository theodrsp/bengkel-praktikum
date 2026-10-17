import { pool } from './db';

// Tambahkan rute health check database
app.get('/api/health', async (req, res) => {
  try {
    const result = await pool.query('SELECT 1 as healthy');
    res.json({
      status: 'ok',
      database: result.rows[0].healthy === 1 ? 'connected' : 'unknown',
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      database: 'disconnected',
      message: (error as Error).message,
    });
  }
});