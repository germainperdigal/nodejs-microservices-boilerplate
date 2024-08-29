import dotenv from 'dotenv';
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import 'module-alias/register';

/** Shared */
import { authenticateJWT } from '@shared/auth';

dotenv.config();

const app = express();

app.use((err: any, req: any, res: any, next: any) => {
    console.error('Error handling middleware:', err);
    res.status(500).json({ error: 'Internal Server Error !' });
});

app.use('/api/users', authenticateJWT, createProxyMiddleware({
    target: 'http://user-service:3001/users',
    changeOrigin: true,
}));

export default app;
