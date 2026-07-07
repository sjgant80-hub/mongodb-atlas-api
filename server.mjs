#!/usr/bin/env node
/**
 * mongodb-atlas-api · HTTP proxy for MongoDB Atlas
 * Sovereign estate wrapper for MongoDB Atlas · Database
 * Docs: https://www.mongodb.com/docs/atlas/
 */
import { createServer } from 'node:http';
const PORT = process.env.PORT || 4200;
createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.url === '/health') return res.end(JSON.stringify({ status: 'ok', wraps: 'MongoDB Atlas' }));
  res.end(JSON.stringify({ name: 'mongodb-atlas-api', wraps: 'MongoDB Atlas', docs: 'https://www.mongodb.com/docs/atlas/' }));
}).listen(PORT, () => console.log('mongodb-atlas-api on', PORT));
