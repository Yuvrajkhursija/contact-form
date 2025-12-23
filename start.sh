#!/usr/bin/env bash
set -e

echo "🚀 Moving to backend directory"
cd backend

echo "📦 Installing dependencies"
npm install

echo "🚀 Starting server"
npm start
