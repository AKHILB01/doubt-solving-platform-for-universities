# 🚀 QUICK MONGODB SETUP FOR WINDOWS

## Step 1: Download MongoDB
1. Go to: https://www.mongodb.com/try/download/community
2. Select **Windows** → **MSI** → **Download**
3. Run the installer (.msi file)

## Step 2: Install MongoDB
1. Choose "Complete" installation
2. Install MongoDB Compass (optional but recommended)
3. Finish installation

## Step 3: Start MongoDB
After installation, MongoDB will be added to Windows Services.

**Option A: Start via Services (Recommended)**
1. Press Win+R → Type `services.msc`
2. Find "MongoDB" → Right-click → Start

**Option B: Start via Command Line**
```bash
# In a new terminal (keep it running)
"C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe"
```

## Step 4: Verify Connection
```bash
# In another terminal
mongosh
# Should connect successfully
```

## Step 5: Restart Backend
Once MongoDB is running, restart the backend:
```bash
cd server
npm run dev
```

---

## ⚡ QUICK START (After Installation)

1. **Start MongoDB Service** (from Windows Services)
2. **Restart Backend Terminal** (it will auto-connect)
3. **Test Signup** - Should work now!

---

## 📞 Need Help?
- MongoDB Installation Guide: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
- If issues: Check Windows Services for MongoDB status