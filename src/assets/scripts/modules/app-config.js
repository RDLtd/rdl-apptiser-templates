
const api = window.location.hostname.includes('localhost') ? 'https://localhost:4000' : `https://api.apptiser.io`;
const isProd = (process.env.NODE_ENV === 'production');
const server = process.env.NODE_ENV === 'production' ? `https://api.apptiser.io` : `http://localhost:4000`;


export { api, isProd, server  };
