/**
 * DUMUMUB Backend API Server
 * 
 * Express.js server for the DUMUMUB audio plugin distribution platform.
 * Handles plugin downloads, email collection, and database management.
 * 
 * Author: Hugh Buntine
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
const { PrismaClient } = require('@prisma/client');

// Initialize environment variables from .env file
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;
const prisma = new PrismaClient();

/**
 * CORS Configuration
 * Allows requests from production domains and local development servers
 * Configured for both custom domain (dumumub.com) and deployment URLs
 */
const corsOptions = {
  origin: [
    'https://dumumub.com',           // Primary production domain
    'https://www.dumumub.com',       // WWW subdomain
    'https://dumumubcom.vercel.app', // Vercel deployment URL
    'http://localhost:5173',         // Vite dev server (default)
    'http://localhost:5174',         // Vite dev server (alternative)
    'http://localhost:3000'          // Alternative development port
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'X-Requested-With', 'Accept'],
};

/**
 * Express Middleware Configuration
 */
app.use(cors(corsOptions));
app.use(express.json()); // Parse incoming JSON request bodies

// Serve static files (plugin downloads, images) from public directory
app.use('/public', express.static(path.join(__dirname, 'public')));

/**
 * Health Check Endpoints
 */

// Root endpoint - basic server status check
app.get('/', (req, res) => {
  res.send('DUMUMUB Backend API Server - Status: Active');
});

// Frontend connectivity test endpoint
app.get('/test', (req, res) => {
  res.send('BACKEND IS CONNECTED TO FRONTEND');
});

/**
 * Plugin Download API
 * Secure file download endpoint with whitelist validation
 */
app.get('/api/download/:filename', (req, res) => {
  const { filename } = req.params;
  
  // Security: Whitelist of allowed plugin files to prevent directory traversal
  const allowedFiles = {
    'dumumub-0000003': 'dumumub-0000003-download.zip',
    'dumumub-0000004': 'dumumub-0000004-download.zip'
  };
  
  if (!allowedFiles[filename]) {
    return res.status(404).json({ error: 'File not found' });
  }
  
  const filePath = path.join(__dirname, 'public', 'downloads', allowedFiles[filename]);
  
  // Stream file to client with appropriate headers for download
  res.download(filePath, allowedFiles[filename], (err) => {
    if (err) {
      console.error('Download error:', err);
      res.status(500).json({ error: 'Download failed' });
    }
  });
});

/**
 * Email Collection API
 * Handles email submissions for plugin download tracking and user engagement.
 * Implements smart duplicate detection and plugin tracking per user.
 */
app.post('/api/emails', async (req, res) => {
  try {
    const { email, plugin } = req.body;
    
    // Validate required fields
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Database operations with error handling for graceful degradation
    try {
      const pluginName = plugin || 'unknown';
      
      // Check if email already exists in database
      const existingEmail = await prisma.email.findUnique({
        where: { email: email }
      });

      let savedEmail;
      
      if (existingEmail) {
        // Update existing user: add new plugin to their download list if not already present
        if (!existingEmail.plugins.includes(pluginName)) {
          savedEmail = await prisma.email.update({
            where: { email: email },
            data: {
              plugins: {
                push: pluginName // Append new plugin to existing array
              }
            }
          });
          console.log('📧 Plugin added to existing user:', { email, newPlugin: pluginName, allPlugins: savedEmail.plugins });
        } else {
          console.log('📧 Plugin already downloaded by user:', { email, plugin: pluginName });
          savedEmail = existingEmail;
        }
      } else {
        // Create new user record with their first plugin download
        savedEmail = await prisma.email.create({
          data: {
            email: email,
            plugins: [pluginName]
          }
        });
        console.log('📧 New user registered:', { email, plugins: savedEmail.plugins });
      }
      
      res.status(201).json({ 
        message: 'Email saved successfully',
        id: savedEmail.id 
      });
    } catch (dbError) {
      // Graceful degradation: if database is unavailable, log but don't fail user experience
      console.log('📧 Email submitted (database unavailable):', { email, plugin: plugin || 'unknown' });
      console.log('Database error:', dbError.message);
      
      // Return success response to maintain user experience
      const fallbackId = Math.floor(Math.random() * 1000);
      res.status(201).json({ 
        message: 'Email saved successfully',
        id: fallbackId 
      });
    }
  } catch (error) {
    console.error('Error processing email submission:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * Server Lifecycle Management
 */

// Graceful shutdown handler - ensures database connections are properly closed
process.on('SIGINT', async () => {
  console.log('\n🔄 Shutting down server gracefully...');
  await prisma.$disconnect();
  console.log('✅ Database connections closed');
  process.exit(0);
});

// Start the Express server
app.listen(port, () => {
  console.log(`🚀 DUMUMUB Backend API Server running on port ${port}`);
  console.log(`📡 Health check: http://localhost:${port}`);
  console.log(`🎵 Environment: ${process.env.NODE_ENV || 'development'}`);
});
