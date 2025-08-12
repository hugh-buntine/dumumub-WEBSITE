# DUMUMUB - Audio Plugin Distribution Platform

🎵 **Live Website:** [https://dumumub.com](https://dumumub.com)

A modern, full-stack web application for distributing audio plugins with integrated email collection and download tracking. Built with React, Express.js, and deployed to production with custom domain and SSL.

![DUMUMUB Website](https://via.placeholder.com/800x400/1a1a1a/ffffff?text=DUMUMUB+Audio+Plugins)

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

## 🚦 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- PostgreSQL database (or Supabase account)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hugh-buntine/dumumub-WEBSITE.git
   cd dumumub-WEBSITE
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   
   # Create .env file
   cp .env.example .env
   # Add your database URL and other environment variables
   
   # Setup database
   npx prisma generate
   npx prisma db push
   ```

3. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   
   # Create environment file
   cp .env.example .env.production
   # Configure your API URLs
   ```

4. **Run Development Servers**
   ```bash
   # Backend (from backend directory)
   npm run dev
   
   # Frontend (from frontend directory)
   npm run dev
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
- **API Backend**: https://dumumub-com.onrender.com

### Environment Variables

**Backend (.env)**
```env
DATABASE_URL=postgresql://username:password@host:port/database
PORT=5001
NODE_ENV=production
FRONTEND_URL=https://dumumub.com
```

**Frontend (.env.production)**
```env
VITE_API_BASE_URL=https://dumumub-com.onrender.com
```

## 📊 Database Schema

```sql
model Email {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  createdAt DateTime @default(now())
  plugins   String[] @default([])
}
```

## 🔧 API Endpoints

### Email Collection
```http
POST /api/emails
Content-Type: application/json

{
  "email": "user@example.com",
  "plugin": "dumumub-0000003"
}
```

### Plugin Downloads
```http
GET /downloads/:filename
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

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

Hugh Buntine - [GitHub](https://github.com/hugh-buntine)

Project Link: [https://github.com/hugh-buntine/dumumub-WEBSITE](https://github.com/hugh-buntine/dumumub-WEBSITE)

---

⭐ Star this repository if you found it helpful!
