/**
 * Centralized API Base URL Configuration.
 * 
 * - In local development: defaults to 'http://localhost:5000'
 * - In production (Vercel): configure NEXT_PUBLIC_API_URL to point to your deployed backend (e.g., Render, Railway, etc.)
 */
export const API_BASE_URL = 
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '') || 'http://localhost:5000';
