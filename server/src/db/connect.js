import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/elderly_care_charity';
const dbName = process.env.DB_NAME || 'elderly_care_charity';

let client;
let db;
let isConnected = false;

export async function connectDB() {
  if (db && isConnected) return db;

  try {
    client = new MongoClient(uri, {
      serverSelectionTimeoutMS: 3000, // Timeout fast if local DB isn't running
    });
    await client.connect();
    db = client.db(dbName);
    isConnected = true;
    console.log(`[Database] Successfully connected to MongoDB: "${dbName}"`);
    return db;
  } catch (error) {
    console.warn(`[Database] MongoDB Native Driver Warning: Could not connect to ${uri}. Operating in local seed/fallback mode. (${error.message})`);
    isConnected = false;
    return null;
  }
}

export function getDb() {
  return db;
}

export function isDbConnected() {
  return isConnected;
}

export async function closeDB() {
  if (client) {
    await client.close();
    isConnected = false;
    console.log('[Database] MongoDB connection closed');
  }
}
