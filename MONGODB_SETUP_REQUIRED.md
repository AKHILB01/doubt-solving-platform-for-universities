# ⚠️ MongoDB Required - Setup Instructions

Your project is ready, but **MongoDB is not installed or not running**. 

## Option 1: Use MongoDB Atlas (Cloud) - RECOMMENDED ✅

This is the easiest option - no installation needed!

### Step 1: Create MongoDB Atlas Account
1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up with your email
3. Create a free cluster (M0 Sandbox)

### Step 2: Get Connection String
1. Click "Databases" → Click your cluster
2. Click "Connect" button
3. Select "Drivers" → Node.js → Copy connection string

### Step 3: Update server/.env
Replace the MONGO_URI line in `server/.env`:

**BEFORE:**
```
MONGO_URI=mongodb://localhost:27017/ThaLaiVa
```

**AFTER:**
```
MONGO_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/ThaLaiVa?retryWrites=true&w=majority
```

### Step 4: Restart Backend
Kill the current backend process and run again:
```bash
cd server
npm run dev
```

---

## Option 2: Install MongoDB Locally

### Windows:
1. Download from: https://www.mongodb.com/try/download/community
2. Run installer (.msi file)
3. Follow installation wizard
4. MongoDB will be added to Windows Services

### After Installation:
```bash
# Check MongoDB version
mongod --version

# Start MongoDB (keeps running)
mongod

# In another terminal, start backend:
cd server
npm run dev
```

### Mac:
```bash
# Using Homebrew
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

### Linux:
```bash
# Ubuntu/Debian
sudo apt-get install -y mongodb
sudo systemctl start mongod
```

---

## Option 3: Use Docker (If Installed)

```bash
# Start MongoDB container
docker run -d -p 27017:27017 --name mongodb mongo:latest

# Keep it running in background
# Then start backend normally
cd server
npm run dev
```

---

## ✅ Quick Fix: Update .env for MongoDB Atlas

1. **Get MongoDB Atlas Connection String:**
   - Go to https://www.mongodb.com/cloud/atlas
   - Create account and cluster
   - Get connection string

2. **Update server/.env:**
   ```
   MONGO_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/ThaLaiVa
   ```

3. **Restart Backend:**
   ```bash
   cd server
   npm run dev
   ```

---

## 📞 Stuck?

If you choose **MongoDB Atlas (recommended)**:
- Create account at https://www.mongodb.com/cloud/atlas (FREE)
- No installation needed
- Works from anywhere

Then update `.env` and restart backend!

---

**Next Steps:**
1. Choose MongoDB Atlas or Install MongoDB
2. Update `server/.env` with connection string
3. Run backend: `npm run dev` in server folder
4. Run frontend: `npm start` in client folder
