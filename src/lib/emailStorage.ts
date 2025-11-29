// Client-side email storage interface
// Actual file operations happen on the server via API routes

export interface EmailEntry {
  email: string;
  timestamp: string;
  userAgent: string;
  source: string;
}

export interface EmailEntry {
  email: string;
  timestamp: string;
  userAgent: string;
  source: string;
}

// Client-side email storage utilities
export const emailStorage = {
  // This is now just a placeholder - actual operations happen via API
};