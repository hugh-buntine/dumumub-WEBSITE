// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5001';

export const config = {
  apiBaseUrl: API_BASE_URL,
  endpoints: {
    test: `${API_BASE_URL}/test`,
    emails: `${API_BASE_URL}/api/emails`,
    download: (filename) => `${API_BASE_URL}/api/download/${filename}`,
  }
};

export default config;
