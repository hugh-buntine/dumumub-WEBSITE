# dumumub.com - Experimental Audio Plugin Distribution Platform

🎵 **Live Website:** [https://dumumub.com](https://dumumub.com)

An experimental audio plugin creation project featuring a modern, full-stack web application for distributing free VST plugins. dumumub provides unique, experimental audio tools for musicians to create interesting sounds and music, with an integrated email collection system and sleek, minimalist design.


## Live Demos

### Interactive Banner Navigation
![Banner Button Demo](DEMO%20MEDIA/BANNERBUTTONDEMO.gif)
*Color-coded information buttons with modal popups for About, Plugins, and Contact*

### Plugin Download System
![Download Button Demo](DEMO%20MEDIA/DOWNLOADBUTTONDEMO.gif)
*Seamless download experience with email collection modal*

### Smooth Scrolling Interface
![Scroll Through Plugins](DEMO%20MEDIA/SCROLLTHROUGHPLUGINS.gif)
*Clean, responsive plugin showcase with smooth animations*

## 🚀 Features

- **Experimental Audio Plugins**: Free VST plugins for creative sound manipulation
  - **dumumub-0000003**: Wavetable synthesizer with drag-and-drop audio/image support
  - **dumumub-0000004**: Real-time frequency manipulation tool
- **Interactive UI**: Color-coded navigation with smooth animations and modal popups
- **Seamless Downloads**: One-click plugin downloads with automatic email collection
- **Email Management**: Smart email tracking system that prevents duplicates and tracks plugin downloads per user
- **Responsive Design**: Clean, minimalist aesthetic with custom SCSS styling
- **Production Ready**: Deployed with custom domain, SSL, and optimized CORS handling

## 🛠️ Tech Stack

### Frontend
- **React 19** - Latest React with modern hooks and concurrent features
- **Vite 6.2** - Lightning-fast build tool and dev server
- **SCSS/Sass** - Advanced CSS preprocessing with custom design system
- **Axios** - HTTP client for seamless API communication
- **PropTypes** - Runtime type checking for React components

### Backend
- **Express.js 4.21** - Minimal and flexible Node.js web framework
- **Prisma 6.13** - Next-generation ORM with type safety
- **PostgreSQL** - Robust relational database via Supabase
- **CORS** - Sophisticated cross-origin resource sharing configuration
- **Dotenv** - Environment variable management

### Development & Deployment
- **Frontend Hosting**: Vercel with custom domain and automatic SSL
- **Backend Hosting**: Render.com with free tier deployment
- **Database**: Supabase PostgreSQL with real-time capabilities
- **Domain**: GoDaddy DNS management with proper A records
- **Version Control**: Git with GitHub repository management

## 🏗️ Architecture & Design

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │    Backend      │    │   Database      │
│   (Vercel)      │◄──►│   (Render)      │◄──►│  (Supabase)     │
│                 │    │                 │    │                 │
│ • React 19      │    │ • Express.js    │    │ • PostgreSQL    │
│ • Vite Build    │    │ • Prisma ORM    │    │ • Email Storage │
│ • SCSS Design   │    │ • File Serving  │    │ • Plugin Logs   │
│ • Email Modals  │    │ • CORS Config   │    │ • User Tracking │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Key Design Elements
- **Minimalist Aesthetic**: Clean white background with strategic color accents (red, green, blue)
- **Vertical Layout**: Sticky navigation banner with scrollable plugin showcase
- **Interactive Elements**: Hover effects, modal overlays, and smooth animations
- **Typography**: Consistent "Duru Sans" font family throughout the application
- **Color System**: Custom SCSS variables for consistent branding
- **Responsive Design**: Viewport-relative sizing for optimal mobile experience

## 🌐 Deployment & Production

### Live URLs
- **Primary Domain**: https://dumumub.com (Custom domain with SSL)
- **Vercel Backup**: https://dumumubcom.vercel.app
- **API Backend**: https://dumumub-com.onrender.com

## 📊 Database Schema & API

### Email Collection Schema
```prisma
model Email {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  createdAt DateTime @default(now())
  plugins   String[] @default([])  // Array of downloaded plugins
  
  @@map("emails")
}
```

### API Endpoints

**Email Collection**
```http
POST /api/emails
Content-Type: application/json

{
  "email": "user@example.com",
  "plugin": "DUMUMUB-0000003"
}

Response: {
  "message": "Email saved successfully",
  "id": 123
}
```

**Plugin Downloads**
```http
GET /api/download/dumumub-0000003
GET /api/download/dumumub-0000004

# Triggers automatic download of corresponding .zip file
# Supported files: dumumub-0000003-download.zip, dumumub-0000004-download.zip
```

**Health Check**
```http
GET /test
Response: "BACKEND IS CONNECTED TO FRONTEND"
```

### Smart Email Management
- **Duplicate Prevention**: Unique email constraint prevents duplicate entries
- **Plugin Tracking**: Array field tracks which plugins each user has downloaded
- **Incremental Updates**: New plugin downloads are added to existing user records
- **Error Handling**: Graceful fallback with user-friendly error messages

## 🎯 Technical Challenges Solved

### 1. **Advanced CORS Configuration**
- Multi-domain origin support for development and production environments
- Credential handling for secure cross-origin requests
- Custom headers and methods configuration for complex API interactions

### 2. **Smart Environment Management**
- Separate configuration files for development/production
- Dynamic API URL resolution based on build environment
- Secure environment variable injection in cloud deployments

### 3. **Sophisticated Database Integration**
- Prisma ORM with PostgreSQL for type-safe database operations
- Array field manipulation for tracking multiple plugin downloads per user
- Graceful error handling with fallback mechanisms

### 4. **Production-Grade File Serving**
- Secure download system with filename validation
- Automatic file streaming with proper HTTP headers
- Protection against directory traversal attacks

### 5. **Custom Domain & SSL Implementation**
- DNS configuration with GoDaddy registrar
- Vercel integration for automatic SSL certificate generation
- Proper A record configuration for domain routing

### 6. **Component Architecture Design**
- Modular React component system with clear separation of concerns
- Custom SCSS module system for scoped styling
- PropTypes implementation for runtime type checking

### 7. **Email Collection UX Flow**
- Modal-based email capture triggered post-download
- Smart duplicate detection and user feedback
- Non-intrusive design that maintains user experience flow

## 🚀 Future Enhancements & Roadmap

### Phase 1: User Experience
- [ ] **User Authentication System**: Login/signup with session management
- [ ] **Personal Dashboard**: User download history and plugin management
- [ ] **Advanced Email Features**: Newsletter integration and plugin update notifications
- [ ] **Enhanced UI/UX**: Loading states, error boundaries, and accessibility improvements

### Phase 2: Plugin Ecosystem
- [ ] **Plugin Version Management**: Support for plugin updates and changelogs
- [ ] **Plugin Categories**: Organize plugins by type (synthesizers, effects, utilities)
- [ ] **Search & Filter**: Advanced plugin discovery system
- [ ] **Plugin Ratings**: Community feedback and review system

### Phase 3: Analytics & Insights
- [ ] **Download Analytics**: Real-time dashboards for plugin popularity
- [ ] **User Behavior Tracking**: Insights into user engagement patterns
- [ ] **A/B Testing Framework**: Optimize conversion rates and user experience
- [ ] **Performance Monitoring**: Real-time application performance metrics

### Phase 4: Advanced Features
- [ ] **Plugin Preview System**: In-browser audio demos
- [ ] **Community Features**: User-generated content and plugin sharing
- [ ] **Developer API**: Third-party integration capabilities
- [ ] **Mobile App**: Native iOS/Android application

## 🎵 About dumumub

DUMUMUB is an experimental audio plugin creation project run by a human person. The project intends to provide experimental audio plugins for musicians to utilize to produce and/or perform interesting sounds and/or music. The plugins are free. Enjoy.

### Current Plugins

**dumumub-0000003**: A wavetable synthesizer that allows the user to create and manipulate wavetables by dragging and dropping audio files and images or drawing in their wave directly onto the plugin.

**dumumub-0000004**: A frequency manipulation tool that allows the user to drag and drop frequency information of an incoming signal in real time.

More plugins coming soon...


## 📧 Contact

**Hugh Buntine** - Software Developer  
📧 Email: hughbuntine@gmail.com  
🔗 GitHub: [hugh-buntine](https://github.com/hugh-buntine)  
📱 Instagram: [@dumumub](https://instagram.com/dumumub)  

**Project Links**  
🌐 Live Website: [https://dumumub.com](https://dumumub.com)  
📚 Repository: [https://github.com/hugh-buntine/dumumub-WEBSITE](https://github.com/hugh-buntine/dumumub-WEBSITE)  

---

*Built with ❤️ by the dumumub*


