# 🚀 Doubt Resolution Platform - Complete Startup Guide

## System Requirements

- **Node.js**: v16 or higher
- **MongoDB**: v5.0 or higher (or MongoDB Atlas account)
- **npm**: v7 or higher
- **RAM**: Minimum 4GB
- **OS**: Windows/Mac/Linux

---

## Pre-Execution Checklist

Before starting, ensure you have:

- [x] Node.js and npm installed
- [ ] MongoDB installed and running locally (OR MongoDB Atlas account configured)
- [ ] All dependencies installed in both `server/` and `client/` (already done)
- [ ] `.env` file exists in `server/` folder with correct values
- [ ] Ports 3000 and 5000 are available (not in use)

---

## Step 1: Verify MongoDB Installation

### Windows Users

**Option A: Using MongoDB as a Service**
```powershell
# Check if MongoDB service is running
Get-Service MongoDB

# Start MongoDB service if not running
Start-Service MongoDB
```

**Option B: Using mongod.exe directly**
```powershell
# Replace with your MongoDB installation path
"C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe"
```

**Option C: Using MongoDB Atlas (Cloud - Recommended for beginners)**
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a cluster
3. Get connection string
4. Update `MONGO_URI` in `server/.env` with your connection string

### Mac Users
```bash
# If using Homebrew
brew services start mongodb-community
```

### Linux Users
```bash
# If using apt
sudo systemctl start mongod

# Or using snap
sudo snap start mongodb

# Or using brew
brew services start mongodb-community
```

---

## Step 2: Verify MongoDB Connection

```bash
# Test MongoDB connection
mongosh

# In the mongo shell, run:
db.adminCommand('ping')
# Should return: { ok: 1 }

# Type 'exit' to exit the shell
exit
```

---

## Step 3: Start the Backend Server

### Terminal 1 - Backend

```bash
# Navigate to server folder
cd server

# Start backend with nodemon (auto-reload on changes)
npm run dev

# Expected output:
# ✅ MongoDB connected
# 🚀 Server running at http://localhost:5000
```

**Backend is ready when you see**:
```
✅ MongoDB connected
🚀 Server running at http://localhost:5000
```

---

## Step 4: Start the Frontend Client

### Terminal 2 - Frontend (Open a NEW terminal)

```bash
# Navigate to client folder
cd client

# Start React development server
npm start

# Expected: Browser opens and shows the application
# Loading takes 30-60 seconds for the first time
```

**Frontend is ready when you see**:
```
Compiled successfully!
Local: http://localhost:3000
```
And browser opens automatically.

---

## Step 5: Access the Application

1. **Frontend**: Open http://localhost:3000 (should be automatic)
2. **Backend API**: http://localhost:5000
3. **Socket.IO**: Connected via client automatically

---

## 🧪 Demo Test Cases

### Create a Test Account

1. Go to http://localhost:3000
2. Click on "Student" tab
3. Click on "Signup"
4. Fill in details:
   - Name: Test Student
   - Email: **test@mgit.ac.in** (must end with @mgit.ac.in)
   - Password: TestPass123
   - Branch: Select any branch
5. Click Signup
6. Login with the same credentials

### Test Student Features
1. ✅ Upload a doubt (text only first)
2. ✅ Upvote a doubt from class dashboard
3. ✅ Chat with online teachers

### Create a Teacher Account
1. Repeat signup but select "Teacher" role
2. Teacher should access `/teacher/dashboard`

---

## ✅ Verification Tests

Run these tests to ensure everything is working:

### Test 1: Backend API Connectivity
```bash
# In any terminal
curl http://localhost:5000/

# Expected response:
# "🌟 EduSoul API + WebSocket Running!"
```

### Test 2: MongoDB Connection
```bash
mongosh
db.users.find().limit(1)

# Should return your test user
```

### Test 3: Socket.IO Connection
- Open browser DevTools (F12)
- Go to Console
- You should see Socket.IO connection messages

---

## 🐛 Troubleshooting

### Error: "Port 5000 already in use"
```bash
# Find process using port 5000
lsof -i :5000  # Mac/Linux
netstat -ano | findstr :5000  # Windows

# Kill the process (Windows)
taskkill /PID <PID> /F

# Or change PORT in server/.env to 5001 or 5002
```

### Error: "MongoDB connection failed"
```
✅ Solution: Start MongoDB first
# Windows: Start MongoDB service or run mongod.exe
# Mac: brew services start mongodb-community
# Linux: sudo systemctl start mongod

# Or use MongoDB Atlas (cloud) instead of local
```

### Error: "CORS error" or "Cannot reach localhost:5000"
```
✅ Solution: Backend is not running
- Open Terminal 1
- Navigate to server/
- Run: npm run dev
```

### Error: "Module not found" or "npm ERR!"
```bash
✅ Solution: Reinstall dependencies
# In affected folder (client or server)
rm -rf node_modules package-lock.json
npm install
```

### Error: "PowerShell execution policy" (Windows)
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Error: "Cannot read localStorage"
```
✅ Solution: Clear browser cache
- Press Ctrl+Shift+Delete in browser
- Clear Cookies and Cached Images
- Reload page
```

### Error: "Compiling... (This may take a while)"
```
✅ This is normal on first startup. Wait 30-60 seconds.
If it takes longer than 2 minutes, check your internet connection.
```

---

## 📊 Project File Structure

```
Doubt-resolution-platform/
├── client/                          # React Frontend
│   ├── src/
│   │   ├── pages/                  # Page components
│   │   │   ├── Auth.jsx            # Login/Signup
│   │   │   ├── Home.jsx
│   │   │   ├── StudentDashboard/   # Student pages
│   │   │   ├── TeacherDashboard/   # Teacher pages
│   │   │   └── StudentChat/        # Real-time chat
│   │   ├── firebase.js             # Firebase config
│   │   ├── App.js                  # Router setup
│   │   └── index.js                # App entry point
│   ├── package.json                # Dependencies
│   └── node_modules/               # Installed packages
│
├── server/                          # Node.js Backend
│   ├── routes/                     # API routes
│   │   ├── userRoutes.js           # Auth & user endpoints
│   │   └── doubtRoutes.js          # Doubt endpoints
│   ├── controllers/                # Business logic
│   │   ├── userController.js
│   │   └── doubtController.js
│   ├── models/                     # MongoDB schemas
│   │   ├── User.js
│   │   └── Doubt.js
│   ├── middleware/                 # Custom middleware
│   │   ├── authMiddleware.js
│   │   └── Upload.js               # File uploads
│   ├── server.js                   # Main server file
│   ├── .env                        # Environment variables
│   ├── package.json                # Dependencies
│   └── node_modules/               # Installed packages
│
├── PROJECT_SETUP_CHECKLIST.md      # Setup verification
├── STARTUP_GUIDE.md                # This file
├── startup.bat                     # Windows startup script
└── startup.sh                      # Mac/Linux startup script
```

---

## 🎯 Quick Start Commands

### One-Liner for experienced users:

**Terminal 1**:
```bash
cd server && npm run dev
```

**Terminal 2**:
```bash
cd client && npm start
```

---

## 📱 Key Endpoints

| Feature | Method | Endpoint | Auth Required |
|---------|--------|----------|---|
| Signup | POST | `/api/users/signup` | No |
| Login | POST | `/api/users/login` | No |
| Logout | POST | `/api/users/logout` | Yes |
| Get Leaderboard | GET | `/api/users/leaderboard` | No |
| Upload Doubt | POST | `/api/doubts/upload` | Yes |
| Get Class Doubts | GET | `/api/doubts/class` | Yes |
| Upvote Doubt | POST | `/api/doubts/:id/upvote` | Yes |
| Get Single Doubt | GET | `/api/doubts/:id` | Yes |
| Mark as Solved | PUT | `/api/doubts/:id/mark-solved` | Yes |
| Teacher Dashboard | GET | `/api/doubts/teacher/all-doubts` | Yes |

---

## 🔐 Security Notes

⚠️ **Current Issues (Not Production Ready)**:
1. **Passwords stored in plain text** - Use bcryptjs in production
2. **Session secret hardcoded** - Move to .env
3. **CORS only for localhost:3000** - Add environment-based config
4. **No rate limiting** - Add rate limiting middleware

**Before Production Deployment**:
1. Install: `npm install bcryptjs`
2. Hash passwords in controllers
3. Update .env with secure secrets
4. Use HTTPS
5. Enable rate limiting
6. Add input validation
7. Use MongoDB Atlas with IP whitelisting

---

## 📞 Support & Debugging

If you encounter issues:

1. **Check the troubleshooting section above** ⬆️
2. **Check browser console** (F12)
3. **Check server terminal** for error messages
4. **Check MongoDB** is running: `mongosh`
5. **Restart both servers** (stop with Ctrl+C, then start again)

---

## 📝 Notes

- Keep both terminal windows open while developing
- The client will auto-reload on code changes (hot reload)
- The server will auto-reload on code changes (nodemon)
- Don't close terminals if you want the app to keep running
- Clear browser cache if you have CSS/JS issues

---

**Last Updated**: April 9, 2026  
**Status**: ✅ Ready for Execution (with MongoDB running)
