# DUMUMUB - Audio Plugin Distribution Platform

**Live Website:** [https://dumumub.com](https://dumumub.com)

A modern, full-stack web application for distributing audio plugins with integrated email collection and download tracking. Built with React, Express.js, and deployed to production with custom domain and SSL.

## 🚀 Features

- **Plugin Distribution**: Secure download system for audio plugins
- **Email Collection**: Integrated email capture for user engagement
- **Modern UI**: Responsive design with SCSS styling
- **Database Integration**: PostgreSQL with Prisma ORM for data management
- **Production Ready**: Deployed with custom domain, SSL, and CORS handling
- **Download Tracking**: Track which plugins users have downloaded

## 🛠️ Tech Stack

### Frontend
- **React** - Modern UI library
- **Vite** - Fast build tool and dev server
- **SCSS** - Advanced CSS styling
- **Axios** - HTTP client for API calls

### Backend
- **Express.js** - Node.js web framework
- **Prisma** - Type-safe database ORM
- **PostgreSQL** - Robust relational database
- **CORS** - Cross-origin resource sharing

### Deployment & Infrastructure
- **Frontend**: Vercel (with custom domain)
- **Backend**: Render.com
- **Database**: Supabase
- **Domain**: GoDaddy DNS with SSL

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │    Backend      │    │   Database      │
│   (Vercel)      │◄──►│   (Render)      │◄──►│  (Supabase)     │
│                 │    │                 │    │                 │
│ • React + Vite  │    │ • Express.js    │    │ • PostgreSQL    │
│ • SCSS Styling  │    │ • Prisma ORM    │    │ • Email Storage │
│ • Plugin UI     │    │ • File Serving  │    │ • Download Logs │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 📁 Project Structure

```
DUMUMUB-WEBSITE/
├── backend/
│   ├── prisma/
│   │   └── schema.prisma      # Database schema
│   ├── public/
│   │   └── downloads/         # Plugin files
│   ├── index.js              # Express server
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── COMPONENTS/        # React components
│   │   ├── App.jsx           # Main app component
│   │   └── main.jsx          # Entry point
│   ├── public/               # Static assets
│   └── package.json
└── README.md
```

## 🌐 Deployment

### Production URLs
- **Live Website**: https://dumumub.com
- **Backup URL**: https://dumumubcom.vercel.app

## 📊 Database Schema

```sql
model Email {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  createdAt DateTime @default(now())
  plugins   String[] @default([])
}
```

## 🎯 Key Challenges Solved

1. **CORS Configuration**: Proper cross-origin setup for production
2. **Environment Management**: Separate configs for development/production
3. **Database Integration**: Prisma ORM with PostgreSQL
4. **Custom Domain**: DNS configuration with SSL certificates
5. **File Serving**: Secure plugin download system

## 🚀 Future Enhancements

- [ ] User authentication system
- [ ] Plugin version management
- [ ] Download analytics dashboard
- [ ] Email newsletter integration
- [ ] Plugin categories and search
- [ ] User download history


## 📧 Contact

Hugh Buntine - (email) hughbuntine@gmail.com
dumumub - (instangram) @dumumub


