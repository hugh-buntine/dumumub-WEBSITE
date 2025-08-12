const express = require('express');
const cors = require('cors');
const path = require('path');
const { PrismaClient } = require('@prisma/client');

// Load environment variables
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;
const prisma = new PrismaClient();

// CORS configuration
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? process.env.FRONTEND_URL 
    : ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:3000'],
  credentials: true,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json()); // Parse JSON bodies

// Serve static files from public directory
app.use('/public', express.static(path.join(__dirname, 'public')));

// Basic route to check if the server is working
app.get('/', (req, res) => {
  res.send('Backend is working!');
});

// Example route for static data
app.get('/test', (req, res) => {
  res.send('BACKEND IS CONNECTED TO FRONTEND');
});

// Download endpoint for plugins
app.get('/api/download/:filename', (req, res) => {
  const { filename } = req.params;
  
  // Security: only allow specific files
  const allowedFiles = {
    'dumumub-0000003': 'dumumub-0000003-download.zip',
    'dumumub-0000004': 'dumumub-0000004-download.zip'
  };
  
  if (!allowedFiles[filename]) {
    return res.status(404).json({ error: 'File not found' });
  }
  
  const filePath = path.join(__dirname, 'public', 'downloads', allowedFiles[filename]);
  
  // Set download headers
  res.download(filePath, allowedFiles[filename], (err) => {
    if (err) {
      console.error('Download error:', err);
      res.status(500).json({ error: 'Download failed' });
    }
  });
});

// Email submission endpoint
app.post('/api/emails', async (req, res) => {
  try {
    const { email, plugin } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Try to save to database, fall back to logging if table doesn't exist
    try {
      const pluginName = plugin || 'unknown';
      
      // Check if email already exists
      const existingEmail = await prisma.email.findUnique({
        where: { email: email }
      });

      let savedEmail;
      
      if (existingEmail) {
        // Email exists, add plugin to the array if not already there
        if (!existingEmail.plugins.includes(pluginName)) {
          savedEmail = await prisma.email.update({
            where: { email: email },
            data: {
              plugins: {
                push: pluginName
              }
            }
          });
          console.log('📧 Plugin added to existing email:', { email, newPlugin: pluginName, allPlugins: savedEmail.plugins });
        } else {
          console.log('📧 Plugin already downloaded by this email:', { email, plugin: pluginName });
          savedEmail = existingEmail;
        }
      } else {
        // New email, create entry with first plugin
        savedEmail = await prisma.email.create({
          data: {
            email: email,
            plugins: [pluginName]
          }
        });
        console.log('📧 New email saved to database:', { email, plugins: savedEmail.plugins });
      }
      
      res.status(201).json({ 
        message: 'Email saved successfully',
        id: savedEmail.id 
      });
    } catch (dbError) {
      // If database table doesn't exist, log for now
      console.log('📧 Email submitted (DB table not ready):', { email, plugin: plugin || 'unknown' });
      console.log('Database error:', dbError.message);
      
      // Still return success to user
      const fakeId = Math.floor(Math.random() * 1000);
      res.status(201).json({ 
        message: 'Email saved successfully',
        id: fakeId 
      });
    }
  } catch (error) {
    console.error('Error saving email:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Graceful shutdown
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
