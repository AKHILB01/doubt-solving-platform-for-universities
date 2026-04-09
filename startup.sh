#!/bin/bash
# Startup script for Doubt Resolution Platform

echo "🚀 Doubt Resolution Platform - Startup Script"
echo "=============================================="

# Check if MongoDB is running
echo ""
echo "🔍 Checking MongoDB connection..."
mongosh --eval "db.adminCommand('ping')" > /dev/null 2>&1 || {
    echo "❌ MongoDB is not running!"
    echo "Please start MongoDB first:"
    echo "  - Windows: Run MongoDB from Services or using 'mongod' in terminal"
    echo "  - Linux/Mac: brew services start mongodb-community"
    exit 1
}
echo "✅ MongoDB is running"

# Terminal 1: Start Backend
echo ""
echo "📡 Starting Backend Server..."
echo "Command: cd server && npm run dev"
echo ""
cd server
npm run dev &
BACKEND_PID=$!

sleep 3

# Terminal 2: Start Frontend
echo ""
echo "🎨 Starting Frontend Client..."
echo "Command: cd ../client && npm start"
echo ""
cd ../client
npm start &
FRONTEND_PID=$!

echo ""
echo "✅ Both servers are starting!"
echo "- Backend: http://localhost:5000"
echo "- Frontend: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop both servers"

# Wait for both processes
wait $BACKEND_PID $FRONTEND_PID
